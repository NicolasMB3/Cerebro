// Bouton Oeil ouvert / fermé de la page d'inscription
const eyeOn4 = document.getElementById("eye_on4");
const eyeOff4 = document.getElementById("eye_off4");
const eyeOn5 = document.getElementById("eye_on5");
const eyeOff5 = document.getElementById("eye_off5");

// Input
const InputPassword4 = document.getElementById("password4");
const InputPassword5 = document.getElementById("password5");

const InputCityAndName = document.getElementById("cityandname");

// Select
const SelectLiberalSalarial = document.getElementById("select_statut");

// Bouton pour changer de section
const BtnInscription13 = document.getElementById("btn_inscription_1");
const BtnInscription23 = document.getElementById("btn_inscription_2");

// Bouton Vous etes Orthophoniste / Etudiant(e) / une structure
const BtnOrthophoniste = document.getElementById("btn_orthophoniste");
const BtnEtudiant = document.getElementById("btn_etudiant");
const BtnStructure = document.getElementById("btn_structure");

// Section Inscription
const SectionInscription13 = document.getElementById("inscription_1");
const SectionInscription23 = document.getElementById("inscription_2");
const SectionInscription33 = document.getElementById("inscription_3");

// Section Info Pro
const SectionOrthophoniste = document.getElementById("section_orthophoniste");
const SectionEtudiant = document.getElementById("section_etudiant");
const SectionStructure = document.getElementById("section_structure");

// Icon info
const IconInfo = document.getElementById("icon_info");

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

// Fonction pour cacher la section Inscription 1/3 et affiché la section Inscription 2/3
function HideSectionInscription23() {
  SectionInscription23.classList.add("d-none");
  SectionInscription33.classList.remove("d-none");
}

BtnInscription23.addEventListener("click", HideSectionInscription23);

// Display inline lorsque le select salarial / liberal ce trouve sur liberal
// Display none lorsque le select salarial / liberal ce trouve sur salarial
function HideSalarial() {
  var index = SelectLiberalSalarial.selectedIndex;
  if (index === 1) {
    InputCityAndName.classList.remove("d-none");
  } else {
    InputCityAndName.classList.add("d-none");
  }
}

SelectLiberalSalarial.addEventListener("change", HideSalarial);

// Fonction pour cacher la section orthophoniste / structure et afficher la section etudiant
function HideSectionOrthophoniste() {
  SectionOrthophoniste.classList.add("d-none");
  SectionEtudiant.classList.remove("d-none");
  SectionStructure.classList.add("d-none");
  BtnEtudiant.classList.remove("btn_not_selected");
  BtnOrthophoniste.classList.add("btn_not_selected");
  BtnStructure.classList.add("btn_not_selected");
}

BtnEtudiant.addEventListener("click", HideSectionOrthophoniste);

// Fonction pour cacher la section etudiant / structure et afficher la section orthophoniste
function HideSectionEtudiant() {
  SectionOrthophoniste.classList.remove("d-none");
  SectionEtudiant.classList.add("d-none");
  SectionStructure.classList.add("d-none");
  BtnEtudiant.classList.add("btn_not_selected");
  BtnOrthophoniste.classList.remove("btn_not_selected");
  BtnStructure.classList.add("btn_not_selected");
}

BtnOrthophoniste.addEventListener("click", HideSectionEtudiant);

// Fonction pour cacher la section etudiant / orthophoniste et afficher la section structure
function HideSectionStructure() {
  SectionOrthophoniste.classList.add("d-none");
  SectionEtudiant.classList.add("d-none");
  SectionStructure.classList.remove("d-none");
  BtnEtudiant.classList.add("btn_not_selected");
  BtnOrthophoniste.classList.add("btn_not_selected");
  BtnStructure.classList.remove("btn_not_selected");
}

BtnStructure.addEventListener("click", HideSectionStructure);

function HideOnInfoText() {}

IconInfo.addEventListener("click", HideOnInfoText);
