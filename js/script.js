// Obtener el botón
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Mostrar el botón cuando el usuario haga scroll hacia abajo
window.onscroll = function() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

// Cuando el usuario haga clic en el botón, desplazarse suavemente al inicio
scrollToTopBtn.onclick = function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};