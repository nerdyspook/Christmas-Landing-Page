/* ====================== Show Menu ===================== */
const navMenu = document.querySelector("#nav-menu");
const navToggle = document.querySelector("#nav-toggle");
const navClose = document.querySelector("#nav-close");

const navLink = document.querySelectorAll(".nav__link");

/* ======= Menu Show ======= */
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}

/* ====== Menu Hidden ====== */
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}

/* == Remove Menu mobile == */
navLink.forEach((link) =>
    link.addEventListener("click", () => navMenu.classList.remove("show-menu"))
);
