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

/* ===== Change Background Header ===== */
function scrollHeader() {
    const header = document.querySelector("#header");

    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 50) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
}

window.addEventListener("scroll", scrollHeader);

/* =========== New Swiper =========== */
let newSwiper = new Swiper(".new-swiper", {
    spaceBetween: 24,
    loop: "true",
    slidesPerView: "auto",
    centeredSlides: true,

    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },

    breakpoints: {
        992: {
            spaceBetween: 80,
        },
    },
});
