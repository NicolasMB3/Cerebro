// Bouton Oeil ouvert / fermé du mot de passe
const eyeOn = document.getElementById("eye_on");
const eyeOff = document.getElementById("eye_off");
const password = document.getElementById("password");

// Section
const connexionHero = document.getElementById("connexion_hero");
const resetMdp = document.getElementById("reset_mdp");
const sendMail = document.getElementById("send_mail");

// Bouton pour changer de section
const BtnMdp = document.getElementById("btn_mdp");
const BtnEmail = document.getElementById("btn_email");
const BtnConnexion = document.getElementById("btn_connexion");

// Dsiplay none / inline-block et type password / text
function HideOff() {
  eyeOff.classList.add("d-none");
  eyeOn.classList.remove("d-none");
  password.type = "text";
}

function HideOn() {
  eyeOff.classList.remove("d-none");
  eyeOn.classList.add("d-none");
  password.type = "password";
}

eyeOff.addEventListener("click", HideOff);
eyeOn.addEventListener("click", HideOn);

// Fonction pour chacher la section Connexion et affiché la section Mot de passe oublié
function HideSectionConnexion() {
  connexionHero.classList.add("d-none");
  resetMdp.classList.remove("d-none");
}

BtnMdp.addEventListener("click", HideSectionConnexion);

// Fonction pour cahcher la section Mot de passe oublié et afficher la section Email envoyé
function HideSectionMdp1() {
  resetMdp.classList.add("d-none");
  sendMail.classList.remove("d-none");
}

BtnEmail.addEventListener("click", HideSectionMdp1);

// Fonction pour cahcher la section Mot de passe oublié et afficher la section Connexion
function HideSectionMdp2() {
  resetMdp.classList.add("d-none");
  connexionHero.classList.remove("d-none");
}

BtnConnexion.addEventListener("click", HideSectionMdp2);
