// Animation de la barre de navigation au scroll
const navbar = document.querySelector(".navbar_s");
const navbarElNav = document.getElementById("navbar");
const littleNavbar = document.querySelector(".navbar_s nav");
let timeScrollOff = 1700;
let isNavbarVisible = true;
let scrollTimeout;

// Sous-menu
const btnLink = document.querySelector(".navbar-link");
/*
const btnLinkApp = document.getElementById("link-app");
const btnLinkRessources = document.getElementById("link-ressources");
const btnLinkApropos = document.getElementById("link-apropos");
*/

const arrowUp = document.querySelectorAll(".arrow_up");
/*
const arrowLinkApp = document.getElementById("arrow-link-app");
const arrowLinkRessources = document.getElementById("arrow-link-ressources");
const arrowLinkApropos = document.getElementById("arrow-link-apropos");
*/

const containerNav = document.querySelector("#container_nav");
/*
const containerApp = document.getElementById("container_app");
const containerRessources = document.getElementById("container_ressources");
const containerApropos = document.getElementById("container_apropos");
*/

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

const arrayBtnLink = document.querySelectorAll(".navbar-link a");

[...arrayBtnLink].forEach((e) => {
  e.addEventListener("click", (button) => {
    containerNav.children[i].classList.remove();
  });
});

arrayBtnLink.forEach((button) => {});

/*
// Afficher / Cacher le sous-menu Application
btnLinkApp.addEventListener("click", () => {
  containerNav.classList.remove("d-none");
  navbarElNav.classList.add("active");
  containerRessources.classList.add("d-none");
  containerApp.classList.remove("d-none");
  containerApropos.classList.add("d-none");

  anime({
    targets: arrowLinkApp,
    rotate: "180deg",
    duration: 200,
    easing: "easeInOutExpo",
  });
});

// Afficher / Cacher le sous-menu Ressources
btnLinkRessources.addEventListener("click", () => {
  containerNav.classList.remove("d-none");
  navbarElNav.classList.add("active");
  containerRessources.classList.remove("d-none");
  containerApp.classList.add("d-none");
  containerApropos.classList.add("d-none");

  anime({
    targets: arrowLinkRessources,
    rotate: "180deg",
    duration: 200,
    easing: "easeInOutExpo",
  });
});

// Afficher / Cacher le sous-menu A propos
btnLinkApropos.addEventListener("click", () => {
  containerNav.classList.remove("d-none");
  navbarElNav.classList.add("active");
  containerRessources.classList.add("d-none");
  containerApp.classList.add("d-none");
  containerApropos.classList.remove("d-none");

  anime({
    targets: arrowLinkApropos,
    rotate: "180deg",
    duration: 200,
    easing: "easeInOutExpo",
  });
});
*/

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
