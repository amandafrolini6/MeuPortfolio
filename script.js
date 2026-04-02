/* =========================
   SCROLL SUAVE COM OFFSET
========================= */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      const offset = 80; // altura da navbar
      const top = target.offsetTop - offset;

      window.scrollTo({
        top,
        behavior: "smooth"
      });
    }
  });
});


/* =========================
   MENU ATIVO AO SCROLL
========================= */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;

    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});


/* =========================
   ANIMAÇÃO AO SCROLL (MELHORADA)
========================= */
const elements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      obs.unobserve(entry.target); // anima só uma vez (profissional)
    }
  });
}, {
  threshold: 0.2
});

elements.forEach(el => observer.observe(el));


/* =========================
   FORMULÁRIO COM FEEDBACK
========================= */
const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const button = form.querySelector("button");
  button.innerText = "Enviando...";
  button.disabled = true;

  setTimeout(() => {
    button.innerText = "Enviado ✅";
    form.reset();

    setTimeout(() => {
      button.innerText = "Enviar";
      button.disabled = false;
    }, 2000);

  }, 1500);
});


/* =========================
   EFEITO NAVBAR AO SCROLL
========================= */
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});