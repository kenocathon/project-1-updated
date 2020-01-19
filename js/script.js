// Select Dom Items

const menuBtn = document.querySelector(".btn-menu");
const menu = document.querySelector(".btn-menu");
const menuNav = document.querySelector(".btn-menu");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelector(".nav-item");

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menu.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));
    showMenu = true;
  } else {
    menu.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));
    showMenu = false;
  }
}
