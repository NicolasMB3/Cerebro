function eye_on() {
  document.getElementById("eye_on").style.display = "none";
  document.getElementById("eye_off").style.display = "inline-block";
  document.getElementById("password").type = "password";
}

function eye_off() {
  document.getElementById("eye_off").style.display = "none";
  document.getElementById("eye_on").style.display = "inline-block";
  document.getElementById("password").type = "text";
}

function display_none_connexion() {
  document.getElementById("container_connexion").style.display = "none";
  console.log("test");
}
