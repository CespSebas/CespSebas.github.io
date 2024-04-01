
var precioProducto = '{"Flor1":"10350","Flor2":"11450","Flor3":"10550","Flor4":"9550","Flor5":"10750","Arreglo1":"19000","Arreglo2":"20000","Arreglo3":"15000","Arreglo4":"18000","Arreglo5":"13500","Caja1":"20000","Caja2":"10125","Caja3":"12250","Caja4":"13250","Caja5":"15500"}';

window.onload = cargaInicial();

function cargaInicial(){

}

function obtenerPrecio(codigo) {
    var precios = JSON.parse(precioProducto);
    return precios[codigo] || "Precio no disponible";
}

function Limpiar() {

}
const $Provincias = document.getElementById("prov");

async function cargarProvincias() {
    try {
        const response = await fetch("https://ubicaciones.paginasweb.cr/provincias.json");
        if (!response.ok) {
            throw new Error('No se pudo cargar la lista de provincias');
        }
        const data = await response.json();

        console.log('Datos de provincias:', data);

        var options = '<option value="">Selecciona una provincia</option>';

 
        for (const [id, nombre] of Object.entries(data)) {
            options += `<option value="${id}">${nombre}</option>`;
        }

        $Provincias.innerHTML = options;
    } catch (error) {
        console.error('Error al cargar las provincias:', error);
    }
}

cargarProvincias();

const $Cantones = document.getElementById("can");

async function cargarCantones() {
    const provi = document.getElementById("prov").value;
    try {
        const response = await fetch(`https://ubicaciones.paginasweb.cr/provincia/${provi}/cantones.json`);
        if (!response.ok) {
            throw new Error('No se pudo cargar la lista de cantones');
        }
        const data = await response.json();

        console.log('Datos de Cantones:', data);

        var options = '<option value="">Selecciona un cantón</option>';


        for (const [id, nombre] of Object.entries(data)) {
            options += `<option value="${id}">${nombre}</option>`;
        }

        $Cantones.innerHTML = options; 
    } catch (error) {
        console.error('Error al cargar los cantones:', error);
    }
}

document.getElementById("prov").addEventListener("change", cargarCantones);

const $Distritos = document.getElementById("dis");

async function cargarDistritos() {
    const provi = document.getElementById("prov").value;
    const canto = document.getElementById("can").value;
    try {
        const response = await fetch(`https://ubicaciones.paginasweb.cr/provincia/${provi}/canton/${canto}/distritos.json`);
        if (!response.ok) {
            throw new Error('No se pudo cargar la lista de distritos');
        }
        const data = await response.json();

        console.log('Datos de distritos:', data);

        var options = '<option value="">Selecciona un distrito</option>';


        for (const [id, nombre] of Object.entries(data)) {
            options += `<option value="${id}">${nombre}</option>`;
        }

        $Distritos.innerHTML = options; 
    } catch (error) {
        console.error('Error al cargar los cantones:', error);
    }
}

document.getElementById("can").addEventListener("change", cargarDistritos); 

function agregarFila() {
    var tabla = document.getElementById("registro");
    var cantidad = document.getElementById("cantidad").value;
    var productoSelect = document.getElementById("producto");
    var producto = productoSelect.options[productoSelect.selectedIndex].text;
    var tamano = document.getElementById("tamanio").value;
    var precio = obtenerPrecio(productoSelect.value);
    var total = cantidad * precio;

    var fila = document.createElement("tr");
    var celdaCantidad = document.createElement("td");
    var celdaProducto = document.createElement("td");
    var celdaTamano = document.createElement("td");
    var celdaPrecio = document.createElement("td");
    var celdaTotal = document.createElement("td");

    celdaCantidad.textContent = cantidad;
    celdaProducto.textContent = producto;
    celdaTamano.textContent = tamano;
    celdaPrecio.textContent = precio;
    celdaTotal.textContent = total;

    fila.appendChild(celdaCantidad);
    fila.appendChild(celdaProducto);
    fila.appendChild(celdaTamano);
    fila.appendChild(celdaPrecio);
    fila.appendChild(celdaTotal);

    tabla.querySelector("tbody").appendChild(fila);

    calcularTotal();
}
function calcularTotal() {
    var totalPagar = 0;
    var tablaFilas = document.querySelectorAll("#registro tbody tr");

    tablaFilas.forEach(function(fila) {
        var totalLinea = parseFloat(fila.querySelector("td:nth-child(5)").textContent);
        totalPagar += totalLinea;
    });

    var provinciaSelect = document.getElementById("prov");
    var provinciaSeleccionada = provinciaSelect.value;
    if (provinciaSeleccionada === "6" || provinciaSeleccionada === "5" || provinciaSeleccionada === "7") {
        totalPagar += 10000;
    }

    var txtTotal = document.getElementById("txtTotal");
    txtTotal.value = totalPagar.toFixed(2); 
}


