const filters = {
  usecase: document.getElementById('usecase'),
  hardware: document.getElementById('hardware'),
  memory: document.getElementById('memory'),
  local: document.getElementById('local'),
  german: document.getElementById('german')
};

const cards = [...document.querySelectorAll('.model-card')];
const resultCount = document.getElementById('resultCount');

function matches(card, key, value) {
  if (value === 'all') return true;
  if (key === 'memory') {
    const required = Number(card.dataset.memory || 0);
    return required <= Number(value);
  }
  return (card.dataset[key] || '').split(' ').includes(value);
}

function applyFilters() {
  let visible = 0;

  cards.forEach(card => {
    const ok =
      matches(card, 'use', filters.usecase.value) &&
      matches(card, 'hardware', filters.hardware.value) &&
      matches(card, 'memory', filters.memory.value) &&
      matches(card, 'local', filters.local.value) &&
      matches(card, 'german', filters.german.value);

    card.classList.toggle('hidden', !ok);
    if (ok) visible++;
  });

  resultCount.textContent = `${visible} ${visible === 1 ? 'Modell' : 'Modelle'}`;
}

Object.values(filters).forEach(el => el.addEventListener('change', applyFilters));

document.getElementById('resetFilters').addEventListener('click', () => {
  Object.values(filters).forEach(el => el.value = 'all');
  applyFilters();
});
