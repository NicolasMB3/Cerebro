// Animation de la barre de navigation au scroll
const navbar = document.querySelector('.navbar');
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

// Écouteur d'événement pour le scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    showNavbar();
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      hideNavbar();
    }, 1000);
  } else {
    showNavbar();
    clearTimeout(scrollTimeout); // Annuler le masquage programmé
  }
});

const arrowPrev = document.getElementById('arrow_prev');
const arrowNext = document.getElementById('arrow_next');

arrowNext.addEventListener('click', function() {
  const commentaire1 = document.getElementById('commentaire_1');
  const commentaire2 = document.getElementById('commentaire_2');
  const commentaire3 = document.getElementById('commentaire_3');

  // Échanger les commentaires
  const temp = commentaire1.innerHTML;
  commentaire1.innerHTML = commentaire2.innerHTML;
  commentaire2.innerHTML = commentaire3.innerHTML;
  commentaire3.innerHTML = temp;

  // Réinitialiser les classes d'animation
  commentaire1.classList.remove('fade-in');
  commentaire2.classList.remove('fade-in');
  commentaire3.classList.remove('fade-in');

  // Appliquer la classe active et l'animation au commentaire déplacé
  commentaire2.classList.add('active');
  commentaire1.classList.remove('active');
  commentaire3.classList.remove('active');

  // Déclencher la nouvelle animation avec un délai
  setTimeout(function() {
    commentaire2.classList.add('fade-in');
  }, 10);
});

arrowPrev.addEventListener('click', function() {
  const commentaire1 = document.getElementById('commentaire_1');
  const commentaire2 = document.getElementById('commentaire_2');
  const commentaire3 = document.getElementById('commentaire_3');

  // Échanger les commentaires
  const temp = commentaire3.innerHTML;
  commentaire3.innerHTML = commentaire2.innerHTML;
  commentaire2.innerHTML = commentaire1.innerHTML;
  commentaire1.innerHTML = temp;

  // Réinitialiser les classes d'animation
  commentaire1.classList.remove('fade-in');
  commentaire2.classList.remove('fade-in');
  commentaire3.classList.remove('fade-in');

  // Appliquer la classe active et l'animation au commentaire déplacé
  commentaire2.classList.add('active');
  commentaire1.classList.remove('active');
  commentaire3.classList.remove('active');

  // Déclencher la nouvelle animation avec un délai
  setTimeout(function() {
    commentaire2.classList.add('fade-in');
  }, 10);
});

const collapseHeaders = document.querySelectorAll('[data-bs-toggle="collapse"]');
const collapseTabs = document.querySelectorAll('.tab-1, .tab-2, .tab-3');

collapseHeaders.forEach((header, index) => {
    header.addEventListener('click', () => {
        const target = document.querySelector(header.getAttribute('data-bs-target'));

        collapseTabs.forEach((tab, i) => {
            if (i === index) {
                target.classList.add('show');
                tab.classList.add('active');
            } else {
                const tabTarget = document.querySelector(collapseHeaders[i].getAttribute('data-bs-target'));
                tabTarget.classList.remove('show');
                collapseTabs[i].classList.remove('active');
            }
        });
    });
});