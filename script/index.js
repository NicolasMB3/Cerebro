const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', function() {
   if (window.scrollY > 5) {
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

// Récupérer les éléments du DOM
const commentaires = Array.from(document.querySelectorAll('[id^="commentaire_"]'));
const arrowPrev = document.getElementById('arrow_prev');
const arrowNext = document.getElementById('arrow_next');

// Index du commentaire actuellement affiché
let currentIndex = Math.floor(commentaires.length / 2);

// Fonction pour mettre à jour l'affichage des commentaires
function updateDisplay() {
  commentaires.forEach((element, index) => {
    if (index === currentIndex) {
      element.classList.add('active', 'col-lg-6', 'col-12');
    } else {
      element.classList.remove('active', 'col-lg-6', 'col-12');
      element.classList.add('col');
    }
  });
}

// Fonction pour afficher le commentaire précédent
function showPreviousComment() {
  if (currentIndex > 0) {
    currentIndex--;
    updateDisplay();
  }
}

// Fonction pour afficher le commentaire suivant
function showNextComment() {
  if (currentIndex < commentaires.length - 1) {
    currentIndex++;
    updateDisplay();
  }
}

// Écouter les événements de clic sur les flèches
arrowPrev.addEventListener('click', showPreviousComment);
arrowNext.addEventListener('click', showNextComment);

// Mettre à jour l'affichage initial
updateDisplay();

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