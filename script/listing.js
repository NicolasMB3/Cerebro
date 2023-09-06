// Animation de la barre de navigation au scroll
const navbar = document.querySelector('.navbar');
let timeScrollOff = 1700;
let isNavbarVisible = true;
let scrollTimeout;

window.addEventListener('scroll', function() {
   if (window.scrollY > 5) {
     // Vérifier si la barre de navigation est masquée
     if (!isNavbarVisible) {
       showNavbar(); // Afficher la barre de navigation
     }
 
     navbar.classList.add('navbar-transition');
     if (window.innerWidth < 980) {
       navbar.style.marginTop = '20px';
     } else {
       navbar.style.marginTop = '0';
     }
   } else {
     navbar.classList.add('navbar-transition');
     if (window.innerWidth < 980) {
       navbar.style.marginTop = '20px';
     } else {
       navbar.style.marginTop = '38px';
     }
 
     setTimeout(function() {
       navbar.classList.remove('navbar-transition');
     }, 300);
   }
 });

// Fonction pour masquer la navbar
function hideNavbar() {
  if (isNavbarVisible) {
    navbar.classList.add('navbar-hidden');
    isNavbarVisible = false;
  }
}

// Fonction pour afficher la navbar
function showNavbar() {
  if (!isNavbarVisible) {
    navbar.classList.remove('navbar-hidden');
    isNavbarVisible = true;
  }
}

// Gérer le défilement
function handleScroll() {
  showNavbar();
  clearTimeout(scrollTimeout);

  if (window.scrollY > 80) {
    scrollTimeout = setTimeout(() => {
      hideNavbar();
    }, timeScrollOff);
  }
}

// Écouteur d'événement pour le scroll
window.addEventListener('scroll', handleScroll);

// Écouteur d'événement pour gérer la souris
navbar.addEventListener('mouseenter', () => {
  showNavbar();
  clearTimeout(scrollTimeout);
});

navbar.addEventListener('mouseleave', () => {
  if (window.scrollY > 80) {
    hideNavbar();
  }
});

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