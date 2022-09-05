const menu = document.querySelector(".nav__hamburger");
const menuImg = document.querySelector(".nav__hamburger__img");
const overlay = document.querySelector(".overlay");
const navMenu = document.querySelector(".nav__menu");

menu.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  if (navMenu.classList.contains("open")) {
    overlay.classList.add("open");
    menuImg.src = "./images/icon-close.svg";
    menuImg.classList.add("close");
  } else {
    overlay.classList.remove("open");
    menuImg.src = "./images/icon-hamburger.svg";
    menuImg.classList.remove("close");
  }
});
