// Elementos principais
const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".nav-link");
const backToTop = document.getElementById("backToTop");
const sections = document.querySelectorAll("section[id]");

// Abre e fecha o menu mobile
menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("open");

  const icon = menuToggle.querySelector("i");

  if (navbar.classList.contains("open")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  } else {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }
});

// Fecha o menu mobile ao clicar em uma aba
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("open");

    const icon = menuToggle.querySelector("i");

    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  });
});

// Ativa a aba correspondente conforme o scroll
function activateMenuOnScroll() {
  const scrollPosition = window.scrollY + 170;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      navLinks.forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });
    }
  });
}

// Mostra ou esconde o botão de voltar ao topo
function toggleBackToTop() {
  if (window.scrollY > 500) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
}

// Volta ao topo
backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Eventos de scroll
window.addEventListener("scroll", () => {
  activateMenuOnScroll();
  toggleBackToTop();
});
