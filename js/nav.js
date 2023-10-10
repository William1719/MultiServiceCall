const navbarToggle = document.getElementById("navbarToggle");
const navbarMenu = document.getElementById("navbarMenu");

navbarToggle.addEventListener("click", () => {
    navbarMenu.classList.toggle("active");
});

// Variable para almacenar la posición de desplazamiento anterior
let prevScrollPos = window.pageYOffset;
// Seleccionar la barra de navegación por su clase
const navbar = document.querySelector('.navbar');

// Función que se ejecuta cuando ocurre el evento de desplazamiento (scroll)
window.onscroll = function() {
    // Obtener la posición de desplazamiento actual
    const currentScrollPos = window.pageYOffset;
    
    // Comprobar si el usuario está haciendo scroll hacia arriba
    if (prevScrollPos > currentScrollPos) {
        // Si es así, mostrar la barra de navegación ajustando la propiedad "top" a 0
        navbar.style.top = "0";
    } else {
        // Si el usuario está haciendo scroll hacia abajo, ocultar la barra de navegación
        // ajustando la propiedad "top" a una altura negativa (en este caso, -60px)
        navbar.style.top = "-70px"; // Altura de la barra de navegación
    }

    // Actualizar la posición de desplazamiento anterior
    prevScrollPos = currentScrollPos;
}
