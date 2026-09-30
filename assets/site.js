const q=s=>document.querySelector(s), qa=s=>[...document.querySelectorAll(s)];
const FEATURED=['gpt-oss-20b','llama-4-scout-17b-16e-instruct','gemma-3-4b-it','qwen3-8b','qwen3-30b-a3b','mistral-small-3-2-24b-instruct-2506','deepseek-r1','phi-4','granite-3-3-8b-instruct'];
let models=[];

function classify(m){
  const use=new Set(), ctx=new Set(['enterprise']);
  const t=((m.uses||[]).join(' ')+' '+(m.summary||'')).toLowerCase();
  if(m.category==='Chat')use.add('Chat');
  if(m.category==='Coding')use.add('Coding');
  if(m.category==='Multimodal')use.add('Multimodal');
  if(m.category==='Reasoning')use.add('Reasoning');
  if(m.category==='Enterprise'){use.add('Chat');use.add('RAG');}
  if(/rag|dokument|wissens/.test(t))use.add('RAG');
  if(/code|coding|entwickler|repository/.test(t))use.add('Coding');
  if(/bild|vision|multimodal|video|audio/.test(t))use.add('Multimodal');
  if(/reasoning|analyse|mathematik|problemlös/.test(t))use.add('Reasoning');
  if(!use.size)use.add('Chat');
  const l=(m.local||'').toLowerCase();
  if(!(l.startsWith('server')||l.includes('cluster')))ctx.add('local');
  if(/server|cluster|multi-gpu|große workstation|high-end/.test(l))ctx.add('server');
  if(m.license_kind==='research')ctx.delete('enterprise');
  return {usecases:[...use],contexts:[...ctx]};
}
function escapeHTML(v){return String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));}
function mark(p){return {'OpenAI':'O','Meta':'L','Google':'G','Qwen':'Q','Mistral AI':'M','DeepSeek':'D','Microsoft':'Φ','IBM':'I'}[p]||'AI';}
function cardHTML(m){
  const c=classify(m), d=m.summary.length>190?m.summary.slice(0,187).replace(/\s+\S*$/,'')+'…':m.summary;
  return `<article class="card model-card" data-name="${escapeHTML(m.name)}" data-provider="${escapeHTML(m.provider_key)}" data-family="${escapeHTML(m.family)}" data-category="${escapeHTML(m.category)}" data-license="${escapeHTML(m.license_kind)}" data-usecases="${escapeHTML(c.usecases.join(' '))}" data-contexts="${escapeHTML(c.contexts.join(' '))}">
  <div class="card-top"><div class="provider-mark">${mark(m.provider)}</div><span class="status">${escapeHTML(m.local)}</span></div>
  <h3>${escapeHTML(m.name)}</h3><div class="maker">${escapeHTML(m.provider)} · ${escapeHTML(m.family)}</div>
  <p class="desc">${escapeHTML(d)}</p>
  <div class="chips"><span class="chip">${escapeHTML(m.category)}</span><span class="chip">${escapeHTML(m.params)}</span><span class="chip">${escapeHTML(m.license)}</span></div>
  <div class="card-foot"><span>${escapeHTML(m.modality)}</span><a class="card-link" href="/modelle/${escapeHTML(m.slug)}/">Profil →</a></div></article>`;
}
function selected(id){return q('#'+id)?.value||'all'}
function has(v,t){return (v||'').split(/\s+/).includes(t)}
function matches(c){
  const s=(q('#search')?.value||'').toLowerCase().trim(), p=selected('provider'), cat=selected('category'), ctx=selected('context'), lic=selected('license');
  const text=[c.dataset.name,c.dataset.provider,c.dataset.family,c.dataset.category,c.dataset.usecases].join(' ').toLowerCase();
  return (!s||text.includes(s))&&(p==='all'||c.dataset.provider===p)&&(cat==='all'||has(c.dataset.usecases,cat))&&(ctx==='all'||has(c.dataset.contexts,ctx))&&(lic==='all'||c.dataset.license===lic);
}
function active(){return (q('#search')?.value||'').trim()||['provider','category','context','license'].some(id=>selected(id)!=='all')}
function count(n,total=n){
  const o=q('#resultCount'); if(!o)return;
  o.textContent=q('#modelGrid')?.dataset.homeFinder==='true'&&!active()?`${total} Modelle verfügbar`:`${n} ${n===1?'Modell':'Modelle'}`;
}
function injectFinderStyles(){
  if(document.getElementById('finder-fix-styles')) return;
  const style=document.createElement('style');
  style.id='finder-fix-styles';
  style.textContent=`.filters{grid-template-columns:1.25fr .85fr 1.25fr 1fr .8fr}.context-picks{margin-top:9px;padding-top:9px;border-top:0}@media(max-width:1100px){.filters{grid-template-columns:1fr 1fr 1fr}}@media(max-width:780px){.filters{grid-template-columns:1fr 1fr}}@media(max-width:620px){.filters{grid-template-columns:1fr}}`;
  document.head.appendChild(style);
}
function patchFinder(){
  const f=q('.finder'); if(!f||q('#context'))return;
  const providers='<option value="all">Alle</option><option value="openai">OpenAI</option><option value="meta">Meta</option><option value="google">Google</option><option value="qwen">Qwen</option><option value="mistral">Mistral AI</option><option value="deepseek">DeepSeek</option><option value="microsoft">Microsoft</option><option value="ibm">IBM</option>';
  f.innerHTML=`<div class="filters">
  <label>SUCHEN<input id="search" placeholder="Modell oder Anbieter – optional"></label>
  <label>ANBIETER<select id="provider">${providers}</select></label>
  <label>WAS SOLL DIE KI KÖNNEN?<select id="category"><option value="all">Alle Einsatzzwecke</option><option value="Chat">Chatten & Texte schreiben</option><option value="Coding">Programmieren & Code verstehen</option><option value="Multimodal">Bilder & Dokumente verstehen</option><option value="Reasoning">Analysieren & komplex denken</option><option value="RAG">RAG / eigenes Wissen nutzen</option></select></label>
  <label>WO SOLL SIE LAUFEN?<select id="context"><option value="all">Überall / noch offen</option><option value="local">Auf meinem Rechner</option><option value="enterprise">Im Team / Unternehmen</option><option value="server">Server / Rechenzentrum</option></select></label>
  <label>LIZENZTYP<select id="license"><option value="all">Alle</option><option value="permissiv">Permissiv</option><option value="community">Community</option><option value="custom">Custom</option><option value="research">Research</option></select></label>
  </div><div class="quick-picks"><span>Aufgabe:</span><button type="button" data-category-pick="Chat">Chat & Texte</button><button type="button" data-category-pick="Coding">Programmieren</button><button type="button" data-category-pick="Multimodal">Bilder & Dokumente</button><button type="button" data-category-pick="Reasoning">Analysieren & Reasoning</button><button type="button" data-category-pick="RAG">RAG / eigenes Wissen</button></div>
  <div class="quick-picks context-picks"><span>Einsatz:</span><button type="button" data-context-pick="local">Mein Rechner</button><button type="button" data-context-pick="enterprise">Team / Unternehmen</button><button type="button" data-context-pick="server">Server / Rechenzentrum</button><button type="button" data-reset-pick>Alle zurücksetzen</button></div>
  <p class="filter-note">Unternehmensnutzung ist kein eigener Modelltyp. Deshalb können viele Modelle infrage kommen – abhängig von Lizenz, Hardware und Einsatzzweck.</p>`;
}
function enrichStaticCards(){
  const byName=new Map(models.map(m=>[m.name,m]));
  qa('.model-card').forEach(c=>{
    const m=byName.get(c.dataset.name); if(!m)return;
    const x=classify(m); c.dataset.usecases=x.usecases.join(' '); c.dataset.contexts=x.contexts.join(' ');
  });
}
function renderHome(){
  const g=q('#modelGrid[data-home-finder="true"]'); if(!g)return;
  const source=active()?models:models.filter(m=>FEATURED.includes(m.slug));
  g.innerHTML=source.map(cardHTML).join('');
  let n=0; qa('.model-card').forEach(c=>{const ok=!active()||matches(c);c.classList.toggle('hidden',!ok);if(ok)n++});
  count(n,models.length);
}
function apply(){
  if(q('#modelGrid[data-home-finder="true"]'))return renderHome();
  let n=0; qa('.model-card').forEach(c=>{const ok=matches(c);c.classList.toggle('hidden',!ok);if(ok)n++});count(n);
}
function bind(){
  ['search','provider','category','context','license'].forEach(id=>q('#'+id)?.addEventListener(id==='search'?'input':'change',apply));
  qa('[data-category-pick]').forEach(b=>b.addEventListener('click',()=>{q('#category').value=b.dataset.categoryPick;apply()}));
  qa('[data-context-pick]').forEach(b=>b.addEventListener('click',()=>{q('#context').value=b.dataset.contextPick;apply()}));
  qa('[data-reset-pick]').forEach(b=>b.addEventListener('click',()=>{if(q('#search'))q('#search').value='';['provider','category','context','license'].forEach(id=>{if(q('#'+id))q('#'+id).value='all'});apply()}));
}
function params(){
  const p=new URLSearchParams(location.search);
  ['provider','category','context','license'].forEach(id=>{const v=p.get(id),e=q('#'+id);if(v&&e&&[...e.options].some(o=>o.value===v))e.value=v});
  if(p.get('q')&&q('#search'))q('#search').value=p.get('q');
}
async function init(){
  document.querySelectorAll('a[href="/#privat"]').forEach(a=>a.href='/modelle/?context=local');
  document.querySelectorAll('a[href="/#unternehmen"]').forEach(a=>a.href='/modelle/?context=enterprise');
  injectFinderStyles();
  patchFinder();
  try{const r=await fetch('/data/models.json',{cache:'no-store'});models=await r.json()}catch(e){models=[]}
  enrichStaticCards(); params(); bind(); apply();
}
init();
