const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector(".navigation");
const links = document.querySelectorAll(".navigation li");
const landing = document.querySelector(".landing");

hamburger.addEventListener("click", () => {
  navigation.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
});

hamburger.addEventListener("click", () => {
  landing.classList.toggle("noshow");
  navigation.style.zIndex = "1";
});
