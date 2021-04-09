const btnToggle = document.querySelector(".btn-menu-mobile");
const menu = document.querySelector(".menu");
const menuLeft = document.querySelector(".menu-left");
const menuRight = document.querySelector(".menu-right");

const Controllers = {
  toggleMenu() {
    menu.classList.toggle("active-menu");
    menuLeft.classList.toggle("active-menus");
    menuRight.classList.toggle("active-menus");
  },
};

btnToggle.addEventListener("click", () => {
  Controllers.toggleMenu();
});
