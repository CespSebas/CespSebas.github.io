var check = document.querySelector(".check");

check.addEventListener('click', idioma);

function idioma() {

    let id = check.checked;

    if (id == true) {
        location.href = "Plantilla Sencilla/MaquetaSencilla.html";
        
    } else {
        location.href = "SencillaEspa.html";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const navbarToggle = document.getElementById('navbarToggle');
    const navbarMenu = document.getElementById('navbarMenu');

    navbarToggle.addEventListener('click', () => {
        navbarMenu.classList.toggle('open');
    });
});
