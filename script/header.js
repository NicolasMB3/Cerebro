// Animation de la barre de navigation au scroll
const navbar = document.querySelector('.navbar_s');
const littleNavbar = document.querySelector('.navbar_s nav');
let timeScrollOff = 1700;
let isNavbarVisible = true;
let scrollTimeout;

window.addEventListener('scroll', function() {
   if (window.scrollY > 5) {
     // Vérifier si la barre de navigation est masquée
     if (!isNavbarVisible) {
       showNavbar(); // Afficher la barre de navigation
     }
 
     littleNavbar.classList.add('navbar-transition');
     if (window.innerWidth < 980) {
       navbar.style.marginTop = '20px';
     } else {
       navbar.style.marginTop = '0';
     }
   } else {
      littleNavbar.classList.add('navbar-transition');
     if (window.innerWidth < 980) {
       navbar.style.marginTop = '20px';
     } else {
       navbar.style.marginTop = '22px';
     }
 
     setTimeout(function() {
      littleNavbar.classList.remove('navbar-transition');
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