function setLanguage(lang) {
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-es]").forEach(el => {
    el.textContent = el.dataset[lang];
  });
}

// Idioma por defecto
setLanguage("es");
