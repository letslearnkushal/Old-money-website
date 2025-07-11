const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});
