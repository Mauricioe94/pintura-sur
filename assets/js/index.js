// === MENÚ HAMBURGUESA ===
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
  menuToggle.classList.toggle('open');
});

// === CARRUSEL ANIMADO (pausa al pasar el mouse) ===
const carousel = document.querySelector('.carousel-track');

carousel.addEventListener('mouseenter', () => {
  carousel.style.animationPlayState = 'paused';
});

carousel.addEventListener('mouseleave', () => {
  carousel.style.animationPlayState = 'running';
});
