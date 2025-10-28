document.addEventListener('DOMContentLoaded', () => {
  // 1. Obtener los elementos del DOM
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');
  
  if (menuToggle && nav) {
      // 2. Agregar un 'event listener' al botón de la hamburguesa
      menuToggle.addEventListener('click', () => {
          // 3. Alternar la clase 'active' en la navegación para mostrar/ocultar
          nav.classList.toggle('active');
          
          // 4. Alternar la clase 'open' en el botón para la animación de la 'X'
          menuToggle.classList.toggle('open');
      });
      
      // 5. Cerrar el menú al hacer clic en un enlace (útil en móviles)
      const navLinks = nav.querySelectorAll('a');
      navLinks.forEach(link => {
          link.addEventListener('click', () => {
              nav.classList.remove('active');
              menuToggle.classList.remove('open');
          });
      });
  }
});