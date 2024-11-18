const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealBottom = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};



ScrollReveal().reveal(".header__image img", {
  ...scrollRevealBottom,
  origin: "right",
});

ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealBottom,
  delay: 500,
});

ScrollReveal().reveal(".header__content p", {
  ...scrollRevealBottom,
  delay: 550,
});

ScrollReveal().reveal(".header__content form", {
  ...scrollRevealBottom,
  delay: 600,
});

ScrollReveal().reveal(".header__content .bar", {
  ...scrollRevealBottom,
  delay: 650,
});

ScrollReveal().reveal(".header__image__card", {
  duration: 1000,
  interval: 500,
  delay: 500,
});


const scrollRevealConfig = {
  distance: "50px",
  duration: 1000,
  easing: "cubic-bezier(0.5, 0, 0, 1)"
};

// Animações para os elementos da seção
ScrollReveal().reveal(".title", {
  ...scrollRevealConfig,
  origin: "top",
  delay: 200,
});

ScrollReveal().reveal(".sub-title", {
  ...scrollRevealConfig,
  origin: "bottom",
  delay: 200,
});

ScrollReveal().reveal(".sub-title", {
  ...scrollRevealConfig,
  origin: "bottom",
  delay: 200,
});


ScrollReveal().reveal(".brand-card1", {
  ...scrollRevealConfig,
  origin: "left",
  delay: 200,
});

ScrollReveal().reveal(".brand-card2", {
  ...scrollRevealConfig,
  origin: "left",
  delay: 400,
});

ScrollReveal().reveal(".brand-card3", {
  ...scrollRevealConfig,
  origin: "left",
  delay: 600,
});

ScrollReveal().reveal(".brand-card4", {
  ...scrollRevealConfig,
  origin: "left",
  delay: 800,
});

ScrollReveal().reveal(".nav-link1", {
  ...scrollRevealConfig,
  origin: "left",
  delay: 50,
});

ScrollReveal().reveal(".nav-link2", {
  ...scrollRevealConfig,
  origin: "left",
  delay: 60,
});

ScrollReveal().reveal(".nav-link3", {
  ...scrollRevealConfig,
  origin: "left",
  delay: 80,
});

ScrollReveal().reveal(".nav-link4", {
  ...scrollRevealConfig,
  origin: "left",
  delay: 100,
});

ScrollReveal().reveal(".nav-link5", {
  ...scrollRevealConfig,
  origin: "left",
  delay: 120,
});

ScrollReveal().reveal(".nav-link6", {
  ...scrollRevealConfig,
  origin: "left",
  delay: 140,
});

ScrollReveal().reveal(".nav-link7", {
  ...scrollRevealConfig,
  origin: "left",
  delay: 160,
});


ScrollReveal().reveal(".nav-link8", {
  ...scrollRevealConfig,
  origin: "left",
  delay: 160,
});


ScrollReveal().reveal(".nav-link9", {
  ...scrollRevealConfig,
  origin: "left",
  delay: 160,
});

const scrollRevealRight = {
  distance: "200px",
  origin: "right",
  duration: 1000,
};

ScrollReveal().reveal("#item-1", {
  ...scrollRevealRight,
  delay: 50,
});

ScrollReveal().reveal("#item-2", {
  ...scrollRevealRight,
  delay: 100,
});

ScrollReveal().reveal("#item-3", {
  ...scrollRevealRight,
  delay: 150,
});

ScrollReveal().reveal("#item-4", {
  ...scrollRevealRight,
  delay: 200,
});

ScrollReveal().reveal("#item-5", {
  ...scrollRevealRight,
  delay: 250,
});

ScrollReveal().reveal("#item-6", {
  ...scrollRevealRight,
  delay: 300,
});

ScrollReveal().reveal("#item-7", {
  ...scrollRevealRight,
  delay: 350,
});

ScrollReveal().reveal("#item-8", {
  ...scrollRevealRight,
  delay: 400,
});

ScrollReveal().reveal("#item-9", {
  ...scrollRevealRight,
  delay: 450,
});



ScrollReveal().reveal(".book-section p", {
  ...scrollRevealBottom,
  origin: "right",
  delay: 500,
});

ScrollReveal().reveal(".book-section h5", {
  ...scrollRevealBottom,
  origin: "right",
});

ScrollReveal().reveal(".book-section-info .li-1", {

  ...scrollRevealBottom,
  origin: "right",
  delay: 300,
});


ScrollReveal().reveal(".book-section-info .li-2", {
  ...scrollRevealBottom,
  origin: "right",
  delay: 500,
});

ScrollReveal().reveal(".book-section-info .li-3", {
  ...scrollRevealBottom,
  origin: "right",
  delay: 700,
});

ScrollReveal().reveal(".book-section-info .li-4", {
  ...scrollRevealBottom,
  origin: "right",
  delay: 900,
});

ScrollReveal().reveal(".book-section-info .li-5", {
  ...scrollRevealBottom,
  origin: "right",
  delay: 1100,
});


ScrollReveal().reveal(".book-section-info .li-6", {
  ...scrollRevealBottom,
  origin: "right",
  delay: 1300,
});

ScrollReveal().reveal(".book-section-info .li-7", {
  ...scrollRevealBottom,
  origin: "right",
  delay: 1500,
});


ScrollReveal().reveal("#nav_3 p", {
  ...scrollRevealBottom,
  origin: "right",
  delay: 800,
});




ScrollReveal().reveal(".book-section img", {
  origin: "left",
  delay: 200,
  distance: "300px",
});


ScrollReveal().reveal(".author-section img", {
  origin: "left",
  delay: 200,
  distance: "300px",
});

ScrollReveal().reveal(".author-section p", {
  origin: "right",
  delay: 200,
  distance: "300px",
});








ScrollReveal().reveal("#nav_6 p", {
  ...scrollRevealBottom,
  origin: "right",
  delay: 800,
});


ScrollReveal().reveal("#nav_6 li", {
  ...scrollRevealBottom,
  origin: "right",
  delay: 900,
});

