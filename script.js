let currentLang = "es";

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-es]").forEach(el => {
    el.textContent = el.dataset[lang];
  });
}

/* Tabs */
function showView(view) {
  document.querySelectorAll(".view").forEach(v =>
    v.classList.remove("active")
  );
  document.querySelector("." + view).classList.add("active");
}

/* Expandir proyectos */
document.addEventListener("click", e => {
  if (e.target.classList.contains("toggle")) {
    const full = e.target.previousElementSibling;
    const isOpen = full.style.display === "block";

    full.style.display = isOpen ? "none" : "block";
    e.target.textContent = isOpen
      ? e.target.dataset[currentLang]
      : currentLang === "es" ? "Mostrar menos" : "Show less";
  }
});

/* Idioma inicial */
setLanguage("es");
