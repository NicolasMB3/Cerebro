// Tag pour filtrer la recherche
const tagContainer = document.getElementById('container-filter');
const tagRefresh = document.getElementById('refresh')
const allFilters = document.querySelectorAll('.cbro-badge');

allFilters.forEach((i) => {
    i.addEventListener('click', () => {
      i.classList.toggle(i.classList[1] + '_active');
      i.classList.toggle('actived');
      i.querySelector('img').classList.toggle('d-none');
      if(i.classList.contains('actived')) {
          tagContainer.prepend(i);
          tagRefresh.classList.remove('d-none');
      } else if (document.querySelectorAll('.actived').length > 1) {
          Array.from(document.querySelectorAll('.actived')).pop().insertAdjacentElement('afterend', i);
      } else if (document.querySelectorAll('.actived').length == 0) {
        tagRefresh.classList.add('d-none');
      }
    })
});

// Supprime la class "Actived" au clique du bouton refresh
tagRefresh.addEventListener('click', () => {
  const allActived = Array.from(document.querySelectorAll('.actived'));
  console.log(allActived)
})