// Obtener elementos del DOM
    const carousel = document.querySelector('.carrusel');
    const imagenes = carousel.querySelectorAll('img');
    const indicadores = document.querySelectorAll('.indicator');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

// Variables para controlar la posición actual
    let posicionActual = 0;

// Función para mostrar la imagen en la posición indicada
    function mostrarImagen(indice) {
      imagenes.forEach(imagen => imagen.style.display = 'none'); // Ocultar todas las imágenes
      imagenes[indice].style.display = 'block'; // Mostrar la imagen en la posición indicada

      // Actualizar indicador activo
      indicadores.forEach(indicador => indicador.classList.remove('active'));
      indicadores[indice].classList.add('active');
    }

// Mostrar la imagen inicial
    mostrarImagen(posicionActual);

// Eventos para los botones de navegación
    prevButton.addEventListener('click', () => {
      posicionActual = (posicionActual - 1 + imagenes.length) % imagenes.length; // Calcular la posición anterior
      mostrarImagen(posicionActual);
    });

    nextButton.addEventListener('click', () => {
      posicionActual = (posicionActual + 1) % imagenes.length; // Calcular la siguiente posición
      mostrarImagen(posicionActual);
    });

// Eventos para los indicadores (opcional)
    indicadores.forEach((indicador, indice) => {
      indicador.addEventListener('click', () => {
        posicionActual = indice;
        mostrarImagen(posicionActual);
      });
});
