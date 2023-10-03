const arrowPrev = document.getElementById("arrow_prev");
const arrowNext = document.getElementById("arrow_next");

arrowNext.addEventListener("click", function () {
  const commentaire1 = document.getElementById("commentaire_1");
  const commentaire2 = document.getElementById("commentaire_2");
  const commentaire3 = document.getElementById("commentaire_3");

  // Échanger les commentaires
  const temp = commentaire1.innerHTML;
  commentaire1.innerHTML = commentaire2.innerHTML;
  commentaire2.innerHTML = commentaire3.innerHTML;
  commentaire3.innerHTML = temp;

  // Réinitialiser les classes d'animation
  commentaire1.classList.remove("fade-in");
  commentaire2.classList.remove("fade-in");
  commentaire3.classList.remove("fade-in");

  // Appliquer la classe active et l'animation au commentaire déplacé
  commentaire2.classList.add("active");
  commentaire1.classList.remove("active");
  commentaire3.classList.remove("active");

  // Déclencher la nouvelle animation avec un délai
  setTimeout(function () {
    commentaire2.classList.add("fade-in");
  }, 10);
});

arrowPrev.addEventListener("click", function () {
  const commentaire1 = document.getElementById("commentaire_1");
  const commentaire2 = document.getElementById("commentaire_2");
  const commentaire3 = document.getElementById("commentaire_3");

  // Échanger les commentaires
  const temp = commentaire3.innerHTML;
  commentaire3.innerHTML = commentaire2.innerHTML;
  commentaire2.innerHTML = commentaire1.innerHTML;
  commentaire1.innerHTML = temp;

  // Réinitialiser les classes d'animation
  commentaire1.classList.remove("fade-in");
  commentaire2.classList.remove("fade-in");
  commentaire3.classList.remove("fade-in");

  // Appliquer la classe active et l'animation au commentaire déplacé
  commentaire2.classList.add("active");
  commentaire1.classList.remove("active");
  commentaire3.classList.remove("active");

  // Déclencher la nouvelle animation avec un délai
  setTimeout(function () {
    commentaire2.classList.add("fade-in");
  }, 10);
});

const collapseHeaders = document.querySelectorAll(
  '[data-bs-toggle="collapse"]'
);
const collapseTabs = document.querySelectorAll(".tab-1, .tab-2, .tab-3");
const tabImg = [
  document.getElementById("img-1"),
  document.getElementById("img-2"),
  document.getElementById("img-3"),
];

collapseHeaders.forEach((header, index) => {
  header.addEventListener("click", () => {
    const target = document.querySelector(
      header.getAttribute("data-bs-target")
    );

    collapseTabs.forEach((tab, i) => {
      if (i === index) {
        target.classList.add("show");
        tab.classList.add("active");
        tabImg[i].classList.remove("d-none");
      } else {
        const tabTarget = document.querySelector(
          collapseHeaders[i].getAttribute("data-bs-target")
        );
        tabTarget.classList.remove("show");
        collapseTabs[i].classList.remove("active");
        tabImg[i].classList.add("d-none");
      }
    });
  });
});

// Section HERO
const elHeaderBackground = document.querySelector(".header-background");
const elImgWomenHeader = document.querySelector(".women-header");
const arrayElTitle = document.querySelectorAll("#h1-title-home, #p-title-home");
const arrayElContainerHome = document.querySelectorAll(".container_home");
let timer;

arrayElTitle.forEach((el, index) => {
  anime({
    targets: el,
    translateY: ["-20px", "0"],
    opacity: ["0", "1"],
    duration: 1000,
    delay: (timer = index * 300),
    easing: "easeInOutExpo",
  });
});

arrayElContainerHome.forEach((el) => {
  anime({
    targets: el,
    translateY: ["-20px", "0"],
    opacity: ["0", "1"],
    duration: 1000,
    delay: timer + 300,
    easing: "easeInOutExpo",
  });
});

anime({
  targets: elImgWomenHeader,
  translateY: {
    value: ["-100px", "0"],
  },
  opacity: {
    value: ["0", "1"],
    duration: 3000,
  },
  duration: 2000,
  delay: 1000,
  easing: "easeOutExpo",
});

anime({
  targets: elHeaderBackground,
  translateY: ["-800px", "0"],
  opacity: ["0", "1"],
  duration: 3000,
  easing: "easeOutExpo",
});

// Section LES RESSOURCES
const arrayNumber = document.querySelectorAll(".number_animation");

arrayNumber.forEach((el) => {
  anime({
    targets: el,
    innerText: [0, el.innerText],
    easing: "easeOutExpo",
    round: true,
    duration: 3000,
  });
});

// Section POURQUOI NOUS
const imgEBP = document.getElementById("img-ebp");
imgEBP.contentDocument;

/*
anime({
  targets: imgEBP,
  rotate: ["0", "360deg"],
  duration: 60000,
  loop: true,
  easing: "linear",
});*/
