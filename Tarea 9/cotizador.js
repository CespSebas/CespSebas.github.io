// Función para validar la fecha de nacimiento y actualizar la imagen de generación
function validarFechaNacimiento() {
    const fechaNacimiento = new Date(document.getElementById('fechaNace').value);
    const fechaActual = new Date();
    const imgGeneracion = document.getElementById('imgGeneracion');
  
    // Validar que la fecha de nacimiento sea menor al día de hoy
    if (fechaNacimiento >= fechaActual) {
      alert('La fecha de nacimiento debe ser menor al día de hoy. Por favor, ingrese una fecha válida.');
      return;
    }
  
    // Calcular la edad del cliente
    let edadCliente = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
    const mes = fechaActual.getMonth() - fechaNacimiento.getMonth();
    if (mes < 0 || (mes === 0 && fechaActual.getDate() < fechaNacimiento.getDate())) {
      edadCliente--;
    }
  
    // Determinar la generación y actualizar la imagen
    if (edadCliente >= 0 && edadCliente <= 6) {
      imgGeneracion.src = 'images/GenAlpha.png';
    } else if (edadCliente >= 7 && edadCliente <= 21) {
      imgGeneracion.src = 'images/GenZ.png';
    } else if (edadCliente >= 22 && edadCliente <= 36) {
      imgGeneracion.src = 'images/geny.png';
    } else if (edadCliente >= 37 && edadCliente <= 51) {
      imgGeneracion.src = 'images/genx.png';
    } else if (edadCliente >= 52 && edadCliente <= 70) {
      imgGeneracion.src = 'images/BabbyBoomers.png'; 
    } else if (edadCliente >= 71) {
      imgGeneracion.src = 'images/Builders.png';
    }

    // Cambiar la imagen de género
    const generoSeleccionado = document.querySelector('input[name="rbtG"]:checked').value;
    cambiarGenero(generoSeleccionado);
}
 
// Función para cambiar la imagen de género
function cambiarGenero() {
    const generoSeleccionado = document.querySelector('input[name="rbtG"]:checked').value;
    const imgGenero = document.getElementById('imgGenero');
    
    if (generoSeleccionado === 'mas') {
        imgGenero.src = 'images/male.png';
    } else {
        imgGenero.src = 'images/female.png';
    }
}


$(document).ready(function() {
    // URL de la API para obtener la lista de monedas
    const apiUrl = 'http://apilayer.net/api/list?access_key=b758c97bcd6b957565decc9b4f798252&format=1';

    // Función para cargar las monedas en el objeto de selección
    function cargarMonedas() {
        $.get(apiUrl, function(data) {
            if (data && data.success) {
                const selectMoneda = $('#cboMonedas'); 
                selectMoneda.empty(); 

                // Iterar sobre las monedas y agregarlas al select
                $.each(data.currencies, function(codigo, descripcion) {
                    selectMoneda.append(new Option(descripcion, codigo));
                });

                // Establecer 'USD' como la opción seleccionada por defecto
                selectMoneda.val('USD');
            } else {
                console.error('Error al cargar las monedas desde la API');
            }
        }).fail(function() {
            console.error('Error al realizar la solicitud a la API');
        });
    }

    // Llamar a la función cargarMonedas al cargar la página
    cargarMonedas();

    // Asociar la función calcularCostoSeguro al clic en el botón de cotización
    $('.button-pipaluk').click(calcularCostoSeguro);
});



// Función para calcular el costo del seguro
function calcularCostoSeguro() {
    const edadCliente = validarFechaNacimiento();
    const generoCliente = cambiarGenero();
    const consumeDrogas = document.getElementById('rbtDrogaSi').checked;
    const enfermedadSeleccionada = document.getElementById('cboEnfermedad').value;
    const montoAsegurado = parseFloat(document.getElementById('txtMonto').value);

    // Verificar si el cliente es Builders o tiene una enfermedad terminal
    if (edadCliente >= 71 || enfermedadSeleccionada === '-1') {
        alert('El cliente no es sujeto de seguro.');
        return;
    }

    // Calcular el monto de recargo por enfermedad (MRE)
    const MRE = parseFloat(enfermedadSeleccionada);

    // Calcular el recargo por consumo de drogas (RCD)
    const RCD = consumeDrogas ? 0.05 : 0; 

    // Calcular el recargo por género (RG)
    const RG = generoCliente === 'mas' ? 0.1 : 0;

    // Calcular el costo base del seguro
    let costoBase = montoAsegurado * 0.02; 

    // Aplicar recargos adicionales
    costoBase *= (1 + MRE + RCD + RG);

    // Mostrar el costo del seguro
    const lblCostoSeguro = document.getElementById('lblCostoSeguro');
    lblCostoSeguro.textContent = 'El costo del seguro es: $' + costoBase.toFixed(2);
}

// Función para cambiar el género
function cambiarGenero() {
    return $('input[name="rbtG"]:checked').val();
}


  