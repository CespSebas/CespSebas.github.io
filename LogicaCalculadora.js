function convertirFahrenheit(valor) {
    var celsius = parseFloat(valor);

    if (isNaN(celsius)) {
        alert("Por favor ingresa un valor válido para la temperatura en Celsius.");
        return;
    }
    var fahrenheit = (celsius * 9 / 5) + 32;
    document.calculator1.res.value = "Temperatura en Fahrenheit: " + fahrenheit.toFixed(2);
}

function convertirKelvin(valor) {
    var celsius = parseFloat(valor);
    if (isNaN(celsius)) {
        alert("Por favor ingresa un valor válido para la temperatura en Celsius.");
        return;
    }
    var kelvin = celsius + 273.15;
    document.calculator1.res.value = "Temperatura en Kelvin: " + kelvin.toFixed(2);
}

function convertirAMillas(valor) {
    var kmInput = parseFloat(valor);
    if (!kmInput || isNaN(kmInput)) {
        alert("Por favor ingrese una distancia válida en kilómetros.");
        return;
    }

    var resultadoMillas = parseFloat(kmInput) * 0.621371;
    document.calculator2.res.value = "Los " + kmInput + " kilómetros son aproximadamente " + resultadoMillas.toFixed(2) + " millas.";
}

function convertirAMetros(valor) {
    var kmInput = parseFloat(valor);
    if (!kmInput || isNaN(kmInput)) {
        alert("Por favor ingrese una distancia válida en kilómetros.");
        return;
    }

    var resultadoMetros = parseFloat(kmInput) * 1000;
    document.calculator2.res.value = "Los " + kmInput + " kilómetros son aproximadamente " + resultadoMetros.toFixed(2) + " metros.";
}

function calcularIMC(peso, altura) {
    var peso = parseFloat(peso);
    var altura = parseFloat(altura);
    
  
    // Verificar si los valores ingresados son válidos
    if (peso <= 0 || altura <= 0 || isNaN(peso) || isNaN(altura)) {
      resultadoElement.textContent = "Por favor, ingrese un peso y una altura válidos.";
      return;
    }
  
    // Calcular el IMC
    var imc = peso / (altura * altura);
  
    // Mostrar el resultado redondeado a dos decimales
     document.calculator3.resultado.value = "Su IMC es: " + imc.toFixed(2);
  }