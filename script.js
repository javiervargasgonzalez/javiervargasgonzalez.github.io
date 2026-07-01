function showView(view) {
  document.querySelectorAll(".view").forEach(v =>
    v.classList.remove("active")
  );
  document.querySelector("." + view).classList.add("active");
}

document.querySelectorAll(".toggle").forEach(btn => {
  btn.addEventListener("click", () => {
    const full = btn.previousElementSibling;
    const preview = full.previousElementSibling;

    if (full.style.display === "block") {
      full.style.display = "none";
      btn.textContent = "Read more";
    } else {
      full.style.display = "block";
      btn.textContent = "Show less";
    }
  });
});
