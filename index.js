const hamburgerButton = document.querySelector(".nav-toggler");
const navigation = document.querySelector(".navbar");
const nameSite = document.getElementById("name-site");
const slide = [
  "slider1.webp",
  "slider2.webp",
  "slider3.webp",
  "slider4.webp",
  "slider5.webp",
  "slider6.webp",
  "slider7.webp",
  "slider8.webp",
  "slider9.webp",
];

function changeBg() {
  let navbar = document.getElementById("navbar");
  let scrollValue = window.scrollY;
  if (scrollValue < 100) {
    navbar.classList.remove("bgColor");
    hamburgerButton.classList.remove("active-color-line");
    nameSite.style.color = "white";
  } else {
    navbar.classList.add("bgColor");
    hamburgerButton.classList.add("active-color-line");
    nameSite.style.color = "black";
    nameSite.style.zIndex = 99;
  }
}
function toggleNav() {
  hamburgerButton.classList.toggle("active-line");
  navigation.classList.toggle("active");
  nameSite.classList.toggle("active-name");
}

window.addEventListener("scroll", changeBg);

hamburgerButton.addEventListener("click", toggleNav);


let number = 0;

function ChangeSlide(direction) {
  number = number + direction;
  if (number > slide.length - 3) number = 0;
  if (number < 0) number = slide.length - 3;
  updateSlides();
}

function updateSlides() {
  const slideElements = document.querySelectorAll(".slide");
  for (let i = 0; i < 3; i++) {
    slideElements[i].src = "./assets/img/" + slide[number + i];
  }
}

function autoChangeSlide() {
  ChangeSlide(1);
}

// Défilement automatique toutes les 3 secondes
setInterval(autoChangeSlide, 3000);

// Démarrer l'affichage initial des images
updateSlides();

function SendMail() {
  let fullNameInput = document.getElementById("fullName");
  let emailInput = document.getElementById("email");
  let messageInput = document.getElementById("message");

  if (fullNameInput.value === "" || emailInput.value === "" || messageInput.value === "") {
    alert("Veuillez remplir tous les champs avant d'envoyer le message.");
    return;
  }


  let params = {
    from_name: fullNameInput.value,
    email: emailInput.value,
    message: messageInput.value,
  };

  emailjs.send("service_a8vegaw", "template_h0wlgxh", params).then(function (res) {
    alert("Message envoyé avec succès : " + res.status);

    fullNameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
  });
}