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