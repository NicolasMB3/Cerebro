// Boutons
const btnWebsite = document.getElementById("btn-website");
const btnLicence = document.getElementById("btn-licence");
const btnApplications = document.getElementById("btn-applications");

// Accordion
const accordionWebsite = document.getElementById("accordion-website");
const accordionLicence = document.getElementById("accordion-licence");
const accordionApplications = document.getElementById("accordion-applications");

btnLicence.addEventListener("click", () => {
  btnWebsite.classList.remove("btn_selected");
  btnApplications.classList.remove("btn_selected");
  btnLicence.classList.add("btn_selected");

  accordionWebsite.classList.add("d-none");
  accordionApplications.classList.add("d-none");
  accordionLicence.classList.remove("d-none");
});

btnWebsite.addEventListener("click", () => {
  btnWebsite.classList.add("btn_selected");
  btnApplications.classList.remove("btn_selected");
  btnLicence.classList.remove("btn_selected");

  accordionWebsite.classList.remove("d-none");
  accordionApplications.classList.add("d-none");
  accordionLicence.classList.add("d-none");
});

btnApplications.addEventListener("click", () => {
  btnWebsite.classList.remove("btn_selected");
  btnApplications.classList.add("btn_selected");
  btnLicence.classList.remove("btn_selected");

  accordionWebsite.classList.add("d-none");
  accordionApplications.classList.remove("d-none");
  accordionLicence.classList.add("d-none");
});
