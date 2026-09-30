
const q=s=>document.querySelector(s), qa=s=>[...document.querySelectorAll(s)];
const cards=qa('.model-card');
function apply(){
 const search=(q('#search')?.value||'').toLowerCase().trim();
 const provider=q('#provider')?.value||'all';
 const category=q('#category')?.value||'all';
 const license=q('#license')?.value||'all';
 let n=0;
 cards.forEach(c=>{
   const text=(c.dataset.name+' '+c.dataset.provider+' '+c.dataset.family+' '+c.dataset.category).toLowerCase();
   const okSearch=!search||text.includes(search);
   const okProvider=provider==='all'||c.dataset.provider===provider;
   const okCategory=category==='all'||c.dataset.category===category;
   const okLicense=license==='all'||c.dataset.license===license;
   const ok=okSearch&&okProvider&&okCategory&&okLicense;
   c.classList.toggle('hidden',!ok); if(ok)n++;
 });
 const out=q('#resultCount'); if(out)out.textContent=n+' Modelle';
}
['search','provider','category','license'].forEach(id=>q('#'+id)?.addEventListener(id==='search'?'input':'change',apply));


// Geführte Schnellauswahl: verständliche Begriffe statt Modellnamen.
qa('[data-category-pick]').forEach(btn => {
  btn.addEventListener('click', () => {
    const category = btn.dataset.categoryPick || 'all';
    const select = q('#category');
    if (select) select.value = category;

    qa('[data-category-pick]').forEach(b => b.classList.remove('active'));
    if (category !== 'all') btn.classList.add('active');

    apply();

    const cardsSection = q('#resultCount');
    if (cardsSection && window.innerWidth < 800) {
      cardsSection.scrollIntoView({behavior:'smooth', block:'center'});
    }
  });
});
