// Animation de la barre de navigation au scroll
const navbar = document.querySelector(".navbar_s");
const navbarElNav = document.getElementById("navbar");
const littleNavbar = document.querySelector(".navbar_s nav");
let timeScrollOff = 1700;
let isNavbarVisible = true;
let scrollTimeout;

// Sous-menu
const arrayArrowUp = document.querySelectorAll(".arrow_up");
const arrayBtnLink = document.querySelectorAll(
  "#link-app, #link-ressources, #link-apropos"
);
const arrayContainerNav = document.querySelectorAll(
  "#container_app, #container_ressources, #container_apropos"
);
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

let index = undefined;
// Pour chaque bouton de la barre de navigation
arrayBtnLink.forEach((button, i) => {
  // On ajoute un évènement au click
  button.addEventListener("click", () => {
    // Pour chaque conteneur de la barre de navigation
    arrayContainerNav.forEach((container) => {
      // Ils sont hidden de base et à chaque click
      container.classList.add("d-none");
      navbarElNav.classList.remove("active");

      // Et chaque arrow mis à 0 à chaque click
      arrayArrowUp.forEach((arrow) => {
        anime({
          targets: arrow,
          rotate: "-1turn",
          duration: 200,
          easing: "easeInOutExpo",
        });

        navbar.addEventListener("mouseleave", () => {
          navbarElNav.classList.remove("active");
          button.classList.remove("actived");
          index = undefined;

          anime({
            targets: arrow,
            rotate: "-1turn",
            duration: 200,
            easing: "easeInOutExpo",
          });

          anime({
            targets: container,
            opacity: "0",
            duration: 500,
            easing: "easeInOutExpo",
          });

          anime({
            targets: containerNav,
            height: 0,
            duration: 1000,
            delay: 200,
            easing: "easeInOutExpo",
          });

          anime({
            targets: navbarElNav,
            borderRadius: ["24px", "5000px"],
            duration: 500,
            delay: 800,
            easing: "easeInOutExpo",
          });

          setTimeout(() => {
            container.classList.add("d-none");
          }, 500);
        });
      });
    });
    // Si le bouton précédemment appuyer et le même alors on cache le conteneur
    if (index === i) {
      navbarElNav.classList.remove("active");
      arrayBtnLink[i].classList.remove("actived");
      index = undefined;

      anime({
        targets: arrayArrowUp[i],
        rotate: "-1turn",
        duration: 200,
        easing: "easeInOutExpo",
      });

      anime({
        targets: arrayContainerNav[i],
        opacity: "0",
        duration: 500,
        easing: "easeInOutExpo",
      });

      setTimeout(() => {
        arrayContainerNav[i].classList.add("d-none");
      }, 500);

      anime({
        targets: containerNav,
        height: "0",
        duration: 1000,
        delay: 200,
        easing: "easeInOutExpo",
      });

      anime({
        targets: navbarElNav,
        borderRadius: ["24px", "5000px"],
        duration: 500,
        delay: 800,
        easing: "easeInOutExpo",
      });
    } else {
      // Sinon on affiche le conteneur cliqué
      navbarElNav.classList.add("active");
      arrayContainerNav[i].classList.remove("d-none");
      arrayBtnLink.forEach((btn) => {
        btn.classList.remove("actived");
      });
      arrayBtnLink[i].classList.add("actived");
      if (index === undefined) {
        anime({
          targets: navbarElNav,
          borderRadius: ["5000px", "24px"],
          duration: 500,
          easing: "easeInOutExpo",
        });

        anime({
          targets: containerNav,
          height: containerNav.scrollHeight,
          duration: 1000,
          easing: "easeInOutExpo",
        });

        anime({
          targets: arrayContainerNav[i],
          easing: "easeInOutExpo",
          opacity: {
            value: "1",
            duration: 500,
            delay: 500,
          },
        });

        setTimeout(() => {
          arrayContainerNav[i].classList.remove("d-none");
        }, 500);

        anime({
          targets: arrayArrowUp[i],
          rotate: "0.5turn",
          duration: 200,
          easing: "easeInOutExpo",
        });

        anime({
          targets: navbarElNav,
          backgroundColor: "#fbf8f4",
          duration: 1000,
          easing: "easeInOutExpo",
        });
      } else {
        containerNav.scrollHeight; // A régler
        arrayContainerNav[i].style.opacity = "1";
      }
      index = i;
    }
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
