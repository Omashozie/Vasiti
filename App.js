const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");
// to make the navbar clickable
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navbar.classList.toggle("active");
});
// to make each of the links in the navbar close the bar after each click
document.querySelectorAll(".navbar").forEach((n) =>n. 
addEventListener("click", () => {
    hamburger.classList.remove("active");
    navbar.classList.remove("active");
  }))

