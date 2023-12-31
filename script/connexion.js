// Bouton Oeil ouvert / fermé du mot de passe de connexion
const eyeOn1 = document.getElementById("eye_on1");
const eyeOff1 = document.getElementById("eye_off1");

// Bouton Oeil ouvert / fermé du changement de mot de passe
const eyeOn2 = document.getElementById("eye_on2");
const eyeOff2 = document.getElementById("eye_off2");
const eyeOn3 = document.getElementById("eye_on3");
const eyeOff3 = document.getElementById("eye_off3");

// Bouton pour changer de section
const BtnForgetMdp = document.getElementById("btn_forget_mdp");
const forgetMdp = document.getElementById("forget_mdp");
const BtnEmail = document.getElementById("btn_email");
const connexionHero = document.getElementById("connexion_hero");
const sendMail = document.getElementById("send_mail");
const BtnReturnConnexion = document.getElementById("btn_return_connexion");
const BtnResetMdp = document.getElementById("btn_reset_mdp");
const BtnResendEmail = document.getElementById("btn_resend_email");
const BtnConnexion = document.getElementById("btn_connexion");
const resetMdp = document.getElementById("reset_mdp");

// Input
const InputEmail = document.getElementById("email");
const InputPassword1 = document.getElementById("password1");
const InputPassword2 = document.getElementById("password2");
const InputPassword3 = document.getElementById("password3");

// Regex
const RegexEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

// Dsiplay none / inline-block et type password / text page de connexion
function HideOff1() {
  eyeOff1.classList.add("d-none");
  eyeOn1.classList.remove("d-none");
  InputPassword1.type = "text";
}

function HideOn1() {
  eyeOff1.classList.remove("d-none");
  eyeOn1.classList.add("d-none");
  InputPassword1.type = "password";
}

eyeOff1.addEventListener("click", HideOff1);
eyeOn1.addEventListener("click", HideOn1);

// Dsiplay none / inline-block et type password / text page de modification de mot de passe
function HideOff2() {
  eyeOff2.classList.add("d-none");
  eyeOn2.classList.remove("d-none");
  InputPassword2.type = "text";
}

function HideOn2() {
  eyeOff2.classList.remove("d-none");
  eyeOn2.classList.add("d-none");
  InputPassword2.type = "password";
}

eyeOff2.addEventListener("click", HideOff2);
eyeOn2.addEventListener("click", HideOn2);

function HideOff3() {
  eyeOff3.classList.add("d-none");
  eyeOn3.classList.remove("d-none");
  InputPassword3.type = "text";
}

function HideOn3() {
  eyeOff3.classList.remove("d-none");
  eyeOn3.classList.add("d-none");
  InputPassword3.type = "password";
}

eyeOff3.addEventListener("click", HideOff3);
eyeOn3.addEventListener("click", HideOn3);

// Fonction pour vérifier les input avant la connexion
function TestRegex() {
  const Email = InputEmail.value;
  const found = Email.match(RegexEmail);
}

BtnConnexion.addEventListener("click", TestRegex);

// Fonction pour cahcher la section Mot de passe oublié et afficher la section Email envoyé
function HideSectionMdp1() {
  forgetMdp.classList.add('d-none');
  sendMail.classList.remove('d-none');

  // Fonction Timer pour la page d'email envoyé
  const departHeures = 0.5;
  let temps = departHeures * 60;
  const timerElement = document.getElementById("timer");
  setInterval(() => {
    let heures = parseInt(temps / 3600, 10);
    let minutes = parseInt((temps % 3600) / 60, 10);
    let secondes = parseInt(temps % 60, 10);
    heures = heures < 10 ? "0" + heures : heures;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    secondes = secondes < 10 ? "0" + secondes : secondes;
    timerElement.innerText = `${heures}:${minutes}:${secondes}`;
    temps = temps <= 0 ? 0 : temps - 1;
  }, 1000);
}

BtnEmail.addEventListener("click", HideSectionMdp1);

// Affiche les autres écrans au clique
const loginSection = document.getElementById('login_section');
const registerSection = document.getElementById('register_section');
const passwordSection = document.getElementById('forget_mdp');
const mainContainer = document.getElementById('connexion_hero');

const btnInitPassword = document.getElementById('btn_forget_mdp');

function displayElement(elem) {
  elem.classList.remove('d-none');
}

function hideElement(elem) {
  elem.classList.add('d-none')
}

btnInitPassword.addEventListener("click", function(){
  hideElement(loginSection);
  hideElement(registerSection);
  displayElement(passwordSection);
  registerSection.classList.remove('d-lg-flex');
}, false);

// Fonction pour cacher la seciton changement de mot passe et afficher la section Connexion
function HideSectionResetMdp() {
  resetMdp.classList.add("d-none");
  connexionHero.classList.remove("d-none");
}

BtnResetMdp.addEventListener("click", HideSectionResetMdp);