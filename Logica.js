function verificarNumero() {

    var numero = document.getElementById("numeroInput").value;


    try {
        if (isNaN(numero)) {
            alert("Error: Ingresa un número válido.");
        }

        if (numero > 0) {
            alert("El número es positivo.");
        } else if (numero < 0) {
            alert("El número es negativo.");
        } else {
            alert("El número es cero.");
        }
    } catch (error) {
        alert("error");
    }
}

function generarSaludo() {

    var nom = document.getElementById("nombre").value;

    alert("¡Hola, " + nom + "! Bienvenido.");
}

function evaluarOperacion() {

    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;

    var resultado = num1 * num2; // Multiplicación como ejemplo

    var valorComparacion = 20;

    if (resultado > valorComparacion) {
        alert("El resultado es mayor que " + valorComparacion + " como resultado " + resultado);
    } else if (resultado < valorComparacion) {
        alert("El resultado es menor que " + valorComparacion + " como resultado " + resultado);
    } else {
        alert("El resultado es igual a " + valorComparacion + " como resultado " + resultado);
    }

}

function operacionesAritmeticas() {

    var num1 = document.getElementById("num1ari").value;
    var num2 = document.getElementById("num2ari").value;

    var suma = num1 + num2;
    var resta = num1 - num2;
    var multiplicacion = num1 * num2;
    var division = num1 / num2;
    var modulo = num1 % num2;

    var resultado = "Suma: " + suma +
        "Resta: " + resta +
        "Multiplicación: " + multiplicacion +
        "División: " + division +
        "Módulo: " + modulo;

    alert(resultado);
}

function usarObjetos() {

    // Objeto Number
    var num1 = new Number(5);
    var num2 = 3;

    var suma = num1 + num2;

    // Objeto Math
    var valorCalculado = Math.pow(suma, 2); // Eleva la suma al cuadrado

    // Objeto Date
    var fechaActual = new Date();

    alert("Suma objeto: " + suma +
        "Valor Math: " + valorCalculado +
        "Fecha actual: " + fechaActual);
}





