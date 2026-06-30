function setLanguage(lang) {
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-es]").forEach(el => {
    el.textContent = el.dataset[lang];
  });
}

// Idioma por defecto
setLanguage("es");

function showView(viewName) {
  document.querySelectorAll('.view').forEach(v => {
    v.classList.remove('active');
  });

  document.querySelector(`.${viewName}`).classList.add('active');

  document.body.className = viewName;
}

// Vista inicial
showView('home');
