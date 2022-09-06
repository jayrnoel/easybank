const menu = document.querySelector(".nav__hamburger");
const menuImg = document.querySelector(".nav__hamburger__img");
const links = document.querySelectorAll(".nav__link");
const overlay = document.querySelector(".overlay");
const navMenu = document.querySelector(".nav__menu");

menu.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  toggleMenu();
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    toggleMenu();
  });
});

function toggleMenu() {
  if (navMenu.classList.contains("open")) {
    overlay.classList.add("open");
    menuImg.src = "./images/icon-close.svg";
    menuImg.classList.add("close");
  } else {
    overlay.classList.remove("open");
    menuImg.src = "./images/icon-hamburger.svg";
    menuImg.classList.remove("close");
  }
}
