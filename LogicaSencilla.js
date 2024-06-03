
function mostrarAlerta() {
    alert("¡Bienvenidos! Disfruten de nuestro menú");
}

// Mostrar la alerta al cargar la página
window.onload = mostrarAlerta;

document.addEventListener('DOMContentLoaded', () => {
    const navbarToggle = document.getElementById('navbarToggle');
    const navbarMenu = document.getElementById('navbarMenu');

    navbarToggle.addEventListener('click', () => {
        navbarMenu.classList.toggle('open');
    });
});
