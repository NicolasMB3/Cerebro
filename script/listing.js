// Tag pour filtrer la recherche
const tagRefresh = document.getElementById('refresh')
const allFilters = document.querySelectorAll('.cbro-badge');

// Fonction pour filtrer les cards en fonction des tags actifs
function filterCards() {
  const activeTags = Array.from(document.querySelectorAll('.cbro-badge.actived'));
  const cards = document.querySelectorAll('.cards-filtre');

  if (activeTags.length === 0) {
    // Si aucun tag actif, afficher toutes les cards
    cards.forEach((card) => {
      tagRefresh.classList.add('d-none');
      card.classList.remove('d-none');
    });
  } else {
    // Si des tags sont actifs, filtrer les cards en fonction des tags actifs
    cards.forEach((card) => {
      const cardTags = card.getAttribute('data-tag').split(' ');
      const shouldShow = activeTags.some((tag) => cardTags.includes(tag.id));
      tagRefresh.classList.remove('d-none');
      if (shouldShow) {
        card.classList.remove('d-none');
      } else {
        card.classList.add('d-none');
      }
    });
  }
}

// Ajoutez un écouteur d'événement sur les tags pour activer/désactiver les tags
allFilters.forEach((i) => {
  i.addEventListener('click', () => {
    i.classList.toggle(i.classList[1] + '_active');
    i.classList.toggle('actived');
    i.querySelector('img').classList.toggle('d-none');
    filterCards();
  });
});

tagRefresh.addEventListener('click', () => {
  allFilters.forEach((i) => {
    i.classList.remove('actived');
    i.classList.remove(i.classList[1] + '_active');
    i.querySelector('img').classList.add('d-none');
  });
  filterCards();
});
