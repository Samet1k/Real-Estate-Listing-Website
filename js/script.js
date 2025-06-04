function toggleMenu() {
  const navUl = document.querySelector("header .nav ul");
  navUl.classList.toggle("active");
}

// Қосымша: меню ашық тұрғанда басқа жерге басса жабу (мобильде ыңғайлы)
document.addEventListener("click", function (event) {
  const navUl = document.querySelector("header .nav ul");
  const menuToggle = document.querySelector(".menu-toggle");

  if (!navUl.contains(event.target) && !menuToggle.contains(event.target)) {
    navUl.classList.remove("active");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("loginBtn");
  const signupBtn = document.getElementById("signupBtn");
  const profileLink = document.getElementById("profileLink");

  const currentUser = localStorage.getItem("currentUser");

  if (currentUser) {
    // Егер логин жасалған болса:
    loginBtn.style.display = "none";
    signupBtn.style.display = "none";
    profileLink.style.display = "inline-block";
  } else {
    // Егер логин жасалмаса:
    loginBtn.style.display = "inline-block";
    signupBtn.style.display = "inline-block";
    profileLink.style.display = "none";
  }
});

document.getElementById("alertBtn")?.addEventListener("click", function () {
  alert("Welcome to the Real Estate Website!");
});

document
  .getElementById("generateNumberBtn")
  ?.addEventListener("click", function () {
    const targetNum = Math.floor(Math.random() * 100) + 1;
    const resultEl = document.getElementById("numberResult");
    const infoEl = document.getElementById("numberInfo");

    resultEl.textContent = "Your discount: 0%";
    infoEl.textContent = "";

    for (let i = 0; i <= targetNum; i++) {
      setTimeout(() => {
        resultEl.textContent = "Your discount: " + i + "%";

        if (i === targetNum) {
          const evenOdd = i % 2 === 0 ? "Even number" : "Odd number";
          const size = i > 50 ? "Discount is over 50%" : "Discount 50% or less";
          infoEl.textContent = evenOdd + ", " + size;
        }
      }, i * 15); // әр итерацияны кідірту (15ms x i)
    }
  });

// 1. Изменяем фон у элемента с id="logo"
let headerLogo = document.getElementById("logo");
if (headerLogo) {
  headerLogo.style.backgroundColor = "#f0f0f0";
}

// 2. Устанавливаем размер шрифта у первого элемента с классом "nav"
let navItems = document.getElementsByClassName("nav");
if (navItems.length > 0) {
  navItems[0].style.fontSize = "18px";
}

// 3. Показываем элемент с классом "content" внутри блока с классом "hero"
let heroContent = document.querySelector(".hero .content");
if (heroContent) {
  heroContent.style.display = "block";
}

let heroHeading = document.querySelector(".hero h1"); // ищем элемент
// if (heroHeading) heroHeading.textContent = "Welcome to Your Dream Home Finder!"; // меняем текст
