const containerLogo = document.getElementById("container_logo");
const logoImages = document.querySelectorAll(".container_logo img");
const imageWidth = logoImages[0].clientWidth; // Largeur d'une image

containerLogo.innerHTML += containerLogo.innerHTML;

anime({
  targets: containerLogo,
  translateX: -imageWidth * logoImages.length,
  duration: 95000,
  loop: true,
  easing: "linear",
  update: (anim) => {
    if (anim.progress >= 1) {
      containerLogo.style.transform = "translateX(0)";
    }
  },
});
