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