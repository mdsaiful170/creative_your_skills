const html = document.querySelector("html");
const themeBtn = document.getElementById("theme-btn");
let currentMode = localStorage.getItem("mode");
if (currentMode === "dark") {
  darkMode();
} else {
  lightMode();
}
themeBtn.addEventListener("click", (e) => {
  if (currentMode === "dark") {
    lightMode();
    currentMode = "light";
  } else {
    darkMode();
    currentMode = "dark";
  }
  localStorage.setItem("mode", currentMode);
});
function darkMode() {
  html.classList.add("dark");
  themeBtn.classList.replace("ri-moon-line", "ri-sun-line");
}
function lightMode() {
  html.classList.remove("dark");
  themeBtn.classList.replace("ri-sun-line", "ri-moon-line");
}

let navBar = document.querySelector(".navbar");
let barsBtn = document.querySelector("#bars-btn");

window.onscroll = () => {
  barsBtn.classList.remove("fa-times");
  navBar.classList.remove("active");
};

barsBtn.addEventListener("click", () => {
  barsBtn.classList.toggle("fa-times");
  navBar.classList.toggle("active");
});

const activeLink = () => {
  const secTion = document.querySelectorAll(
    ".home , .about , .upskill , .contact"
  );
  const navLinks = document.querySelectorAll(".nav-link");

  let current = "#home";

  secTion.forEach((secTion) => {
    const secTionTop = secTion.offsetTop;

    if (this.scrollY >= secTionTop - 100) {
      current = secTion.getAttribute("id");
    }
  });

  navLinks.forEach((item) => {
    item.classList.remove("active");
    if (item.href.includes(current)) {
      item.classList.add("active");
    }
  });
};

window.addEventListener("scroll", activeLink);
// ~~~~~~~~~~~~~~~~~ Dark mode on of section ~~~~~~~~~~~~~~~~~~~~~~~ //

// const html = document.querySelector("html");
// const themeBtn = document.getElementById("theme_btn");
// let currentMode = localStorage.getItem("mode");
// if (currentMode === "dark") {
//     darkMode();
// } else {
//     lightMode();
// }
// themeBtn.addEventListener('click', (e) => {
//     if (currentMode === "dark") {
//         lightMode();
//         currentMode = "light";
//     } else {
//         darkMode();
//         currentMode = "dark";
//     }
//     localStorage.setItem("mode", currentMode);
// });
// function darkMode() {
//     html.classList.add("dark");
//     themeBtn.classList.replace("ri-moon-line", "ri-sun-line");
// }
// function lightMode() {
//     html.classList.remove("dark");
//     themeBtn.classList.replace("ri-sun-line", "ri-moon-line");
// }

// // ~~~~~~~~~~~~~~~~~ scroll up section ~~~~~~~~~~~~~~~~~~~~~~~ //

// const scrollUp = () => {
//     const scrollUpBtn = document.getElementById("scroll-up");
// };
// const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
// };
// const scrollUpBtn = document.getElementById("scroll-up");
// scrollUpBtn.addEventListener('click', scrollToTop);
// window.addEventListener('scroll', scrollUp);
// </script>
