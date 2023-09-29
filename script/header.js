// Animation de la barre de navigation au scroll
const navbar = document.querySelector(".navbar_s");
const navbarElNav = document.getElementById("navbar");
const littleNavbar = document.querySelector(".navbar_s nav");
let timeScrollOff = 1700;
let isNavbarVisible = true;
let scrollTimeout;

// Sous-menu
const btnLinkApp = document.getElementById("link-app");
const arrowLinkApp = document.getElementById("arrow-link-app");

const containerNav = document.getElementById("container_nav");

// Barre d'annonce
const btnCrossHeader = document.getElementById("header-cross");
const header = document.getElementById("header");

window.addEventListener("scroll", function () {
  if (window.scrollY > 5) {
    // Vérifier si la barre de navigation est masquée
    if (!isNavbarVisible) {
      showNavbar(); // Afficher la barre de navigation
    }

    littleNavbar.classList.add("navbar-transition");
    if (window.innerWidth < 980) {
      navbar.style.marginTop = "20px";
    } else {
      navbar.style.marginTop = "0";
    }
  } else {
    littleNavbar.classList.add("navbar-transition");
    if (window.innerWidth < 980) {
      navbar.style.marginTop = "20px";
    } else {
      navbar.style.marginTop = "22px";
    }

    setTimeout(function () {
      littleNavbar.classList.remove("navbar-transition");
    }, 300);
  }
});

// Fonction pour masquer la navbar
function hideNavbar() {
  if (isNavbarVisible) {
    navbar.classList.add("navbar-hidden");
    isNavbarVisible = false;
  }
}

// Fonction pour afficher la navbar
function showNavbar() {
  if (!isNavbarVisible) {
    navbar.classList.remove("navbar-hidden");
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
window.addEventListener("scroll", handleScroll);

// Écouteur d'événement pour gérer la souris
navbar.addEventListener("mouseenter", () => {
  showNavbar();
  clearTimeout(scrollTimeout);
});

navbar.addEventListener("mouseleave", () => {
  if (window.scrollY > 80) {
    hideNavbar();
  }
});

// Afficher / Cacher le sous-menu
btnLinkApp.addEventListener("click", () => {
  containerNav.classList.toggle("d-none");
  navbarElNav.classList.toggle("active");

  anime({
    targets: arrowLinkApp,
    rotate: "180deg",
    duration: 200,
    easing: "easeInOutExpo",
  });
});

// Cacher la barre d'annonce
btnCrossHeader.addEventListener("click", () => {
  anime({
    targets: header,
    translateY: "-36px",
    duration: 800,
    easing: "easeInExpo",
  });

  anime({
    targets: ".body",
    translateY: "-36px",
    duration: 500,
    easing: "easeInExpo",
  });
});
