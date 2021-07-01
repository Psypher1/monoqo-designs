const navOpen = document.querySelector("#nav-open");
const navClose = document.querySelector("#nav-close");
nav = document.querySelector("nav");

navOpen.addEventListener("click", () => {
  nav.classList.toggle("menu-btn");
  nav.addEventListener("click", () => {
    nav.classList.remove("menu-btn");
  });
});
