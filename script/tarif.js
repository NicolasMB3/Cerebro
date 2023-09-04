// FAQ icons
const accordionButtons = document.querySelectorAll(".accordion-button");
    
accordionButtons.forEach(button => {
  button.addEventListener("click", function() {
    const parent = this.parentElement;
    const images = parent.querySelectorAll("img");
    
    images.forEach(image => {
      image.classList.toggle("d-none");
    });

    // Réinitialiser l'icône des autres sections
    accordionButtons.forEach(otherButton => {
      if (otherButton !== this) {
        const otherImages = otherButton.parentElement.querySelectorAll("img");
        otherImages[0].classList.remove("d-none");
        otherImages[1].classList.add("d-none");
      }
    });
  });
});

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
