// Supprime le marginTop de la navbar lors du scroll sur la page
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', function() {
   if (window.scrollY > 5) {
     navbar.classList.add('navbar-transition');
     navbar.style.marginTop = '0';
   } else {
     navbar.classList.add('navbar-transition');
     navbar.style.marginTop = '';
 
     setTimeout(function() {
       navbar.classList.remove('navbar-transition');
     }, 300);
   }
});