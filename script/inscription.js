// Bouton Oeil ouvert / fermé de la page d'inscription
const eyeOn4 = document.getElementById("eye_on4");
const eyeOff4 = document.getElementById("eye_off4");
const eyeOn5 = document.getElementById("eye_on5");
const eyeOff5 = document.getElementById("eye_off5");

// Input password
const InputPassword4 = document.getElementById("password4");
const InputPassword5 = document.getElementById("password5");

// Bouton pour changer de section
const BtnInscription13 = document.getElementById("btn_inscription_1");
const BtnInscription23 = document.getElementById("btn_inscription_2");

// Section
const SectionInscription13 = document.getElementById("inscription_1");
const SectionInscription23 = document.getElementById("inscription_2");
const SectionInscription33 = document.getElementById("inscription_3");

// Dsiplay none / inline-block et type password / text page de modification de mot de passe
function HideOff4() {
  eyeOff4.classList.add("d-none");
  eyeOn4.classList.remove("d-none");
  InputPassword4.type = "text";
}

function HideOn4() {
  eyeOff4.classList.remove("d-none");
  eyeOn4.classList.add("d-none");
  InputPassword4.type = "password";
}

eyeOff4.addEventListener("click", HideOff4);
eyeOn4.addEventListener("click", HideOn4);

function HideOff5() {
  eyeOff5.classList.add("d-none");
  eyeOn5.classList.remove("d-none");
  InputPassword5.type = "text";
}

function HideOn5() {
  eyeOff5.classList.remove("d-none");
  eyeOn5.classList.add("d-none");
  InputPassword5.type = "password";
}

eyeOff5.addEventListener("click", HideOff5);
eyeOn5.addEventListener("click", HideOn5);

// Fonction pour chacher la section Inscription 1/3 et affiché la section Inscription 2/3
function HideSectionInscription13() {
  SectionInscription13.classList.add("d-none");
  SectionInscription23.classList.remove("d-none");
}

BtnInscription13.addEventListener("click", HideSectionInscription13);

// Fonction pour chacher la section Inscription 1/3 et affiché la section Inscription 2/3
function HideSectionInscription23() {
  SectionInscription23.classList.add("d-none");
  SectionInscription33.classList.remove("d-none");
}

BtnInscription23.addEventListener("click", HideSectionInscription23);
