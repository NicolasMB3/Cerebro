const btnContact = document.getElementById("btn_contact");
const toast = document.getElementById("liveToast");
const btnCloseToast = document.getElementById("btn-close");

const copyClipBoard = document.getElementById("copy_clipboard");
const copyIcon = document.getElementById("icon_copy");
const checkIcon = document.getElementById("icon_check");

btnContact.addEventListener("click", HideOffToast);
btnCloseToast.addEventListener("click", HideOnToast);

function HideOffToast() {
  anime({
    targets: toast,
    translateX: "-400px",
    duration: 500,
    endDelay: 1000,
    direction: "alternate",
    easing: "easeOutExpo",
  });
}

function HideOnToast() {
  anime({
    targets: toast,
    translateX: "400px",
    duration: 500,
    easing: "easeInExpo",
  });
}

copyClipBoard.addEventListener("mouseenter", HideOffIcon);
copyClipBoard.addEventListener("mouseleave", HideOnIcon);
copyClipBoard.addEventListener("click", Copy);

function HideOffIcon() {
  anime({
    targets: copyIcon,
    opacity: 1,
    duration: 300,
    delay: 150,
    easing: "easeInOutExpo",
  });

  anime({
    targets: copyClipBoard,
    width: "225px",
    duration: 500,
    easing: "easeInOutExpo",
  });
}

function HideOnIcon() {
  anime({
    targets: copyIcon,
    opacity: 0,
    duration: 300,
    easing: "easeInOutExpo",
  });

  anime({
    targets: copyClipBoard,
    width: "200px",
    duration: 500,
    easing: "easeInOutExpo",
  });
}

function Copy() {
  var email = document.getElementById("mail_copy").innerHTML;
  navigator.clipboard.writeText(email);

  copyClipBoard.classList.add("w-225px");
  copyIcon.classList.remove("icone_copy");
  checkIcon.classList.remove("d-none");
}
