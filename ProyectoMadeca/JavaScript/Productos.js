//alert('funciona');
let carts = document.querySelectorAll('#cart-btn');
let products = [
	{
		name: 'Linterna Recargable',
		tag: '../Img/Productos/linterna2.PNG',
		price: 3500,
		inCart: 0
	},
	{
		name: 'Alambre para Tendero',
		tag: '../Img/Productos/alambreropa2.PNG',
		price: 800,
		inCart: 0
	},
	{
		name: 'Picaporte con Cadena',
		tag: '../Img/Productos/picaportecadena.PNG',
		price: 1800,
		inCart: 0
	},
	{
		name: 'Aldaba Multimedida',
		tag: '../Img/Productos/aldaba2.PNG',
		price: 1500,
		inCart: 0
	},
	{
		name: 'Bisagra Semicruva Multimedida',
		tag: '../Img/Productos/bisagra invisible semicurva.PNG',
		price: 700,
		inCart: 0
	},
	{
		name: 'Bisagra Multimedida',
		tag: '../Img/Productos/bisagra.PNG',
		price: 1300,
		inCart: 0
	},
	{
		name: 'Llavin Puerta Diversidad en Colores',
		tag: '../Img/Productos/llavinbronce1.PNG',
		price: 5500,
		inCart: 0
	},
	{
		name: 'Bisagra Mariposa',
		tag: '../Img/Productos/bisagramariposa.PNG',
		price: 1500,
		inCart: 0
	},
	{
		name: 'Cadena Grapada',
		tag: '../Img/Productos/cadena2.PNG',
		price: 2000,
		inCart: 0
	},
	{
		name: 'Lentes de Proteccion',
		tag: '../Img/Productos/lentes de proteccion.PNG',
		price: 2500,
		inCart: 0
	},
	{
		name: 'Botas Industriales Bellota',
		tag: '../Img/Productos/botasbellota.PNG',
		price: 7500,
		inCart: 0
	},
	{
		name: 'Cadena Tensa #5',
		tag: '../Img/Productos/cadenagalvanizada.PNG',
		price: 2500,
		inCart: 0
	},
	{
		name: 'Candado Fanal Multimedida',
		tag: '../Img/Productos/candadofanal.PNG',
		price: 2500,
		inCart: 0
	},
	{
		name: 'Cartel Señalización Escaleras',
		tag: '../Img/Productos/cartelescalera.PNG',
		price: 1500,
		inCart: 0
	},
	{
		name: 'Cartel Señalización Inflamable ',
		tag: '../Img/Productos/cartelpeligroinflamable.PNG',
		price: 1500,
		inCart: 0
	},
	{
		name: 'Cartel Señalización Salida',
		tag: '../Img/Productos/cartelsalida2.PNG',
		price: 1500,
		inCart: 0
	},
	{
		name: 'Candado de Seguridad',
		tag: '../Img/Productos/candadosseguridadTriple.PNG',
		price: 3200,
		inCart: 0
	},
	{
		name: 'Clavo Multimedida con Cabeza',
		tag: '../Img/Productos/clavocabeza.PNG',
		price: 90,
		inCart: 0
	},
	{
		name: 'Clavo Multimedida sin Cabeza ',
		tag: '../Img/Productos/clavosincabeza.PNG',
		price: 90,
		inCart: 0
	},
	{
		name: 'Chaleco Seguridad',
		tag: '../Img/Productos/chalecoseguridad.PNG',
		price: 2500,
		inCart: 0
	},
	{
		name: 'Tornillo de Techo',
		tag: '../Img/Productos/tornillotechopuntabroca.PNG',
		price: 75,
		inCart: 0
	},
	{
		name: 'Guante de Látex',
		tag: '../Img/Productos/guantelatex.PNG',
		price: 2500,
		inCart: 0
	},
	{
		name: 'Guante de Construccion',
		tag: '../Img/Productos/guantemetalico.PNG',
		price: 2700,
		inCart: 0
	},
	{
		name: 'Jaladera para Gaveta',
		tag: '../Img/Productos/jaladera.PNG',
		price: 900,
		inCart: 0
	}

];
for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumber(products[i]);
        totalCost(products[i]);
    })
}

function onLoadCartNumbers() {
    let productNumber = localStorage.getItem('cartNumber');

    if (productNumber) {
        document.querySelector(".icon").textContent = productNumber;
    }
}

function cartNumber(product) {
    let productNumber = localStorage.getItem('cartNumber');
    productNumber = parseInt(productNumber);

    if (productNumber) {
        localStorage.setItem('cartNumber', productNumber + 1);
        document.querySelector(".icon").textContent = productNumber + 1;
    } else {
        localStorage.setItem('cartNumber', 1);

        document.querySelector(".icon").textContent = 1;
    }

    setItems(product);
}


function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {

        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
    let cartCost = localStorage.getItem('totalCost');

    console.log("Totalidad: ", cartCost);
    console.log(typeof cartCost);

    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }
}

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);

    let productContainer = document.querySelector(".productos");
    let cartCost = localStorage.getItem('totalCost');

    console.log(cartItems);
    if (cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="productosJS">
                <img src="${item.tag}">
                <span>${item.name}</span>
            </div>

            <div class="price">₡${item.price}</div>
            <div class="quantity">
                <span>${item.inCart}</span>
            </div>
            <div class="total">
            ₡${item.inCart * item.price}
            </div>
        `
        });
        productContainer.innerHTML += `
        <div class="basketTotalContainer">
            <h4 class="basketName">
                Subtotal:
                ₡${cartCost}
            </h4>
        </div>    
    `;
    }
    document
        .getElementsByClassName("btn-pagar")[0]
        .addEventListener("click", payClicked);
}

function limpiarLocalStorage() {
    localStorage.clear();
    actualizarCantidadEnCarrito(0);
}

function actualizarCantidadEnCarrito(cantidad) {
    var spanCarrito = document.querySelector('.fa-shopping-cart span');
    if (spanCarrito) {
        spanCarrito.textContent = cantidad;
    }
}


function payClicked() {
    alert("Gracias por la compra, vuelve pronto");
    //Elimino todos los elmentos del carrito
    var carritoItems = document.getElementsByClassName("productos")[0];
    while (carritoItems.hasChildNodes()) {
        carritoItems.removeChild(carritoItems.firstChild);
    }
    onLoadCartNumbers();
    limpiarLocalStorage();
}


onLoadCartNumbers();
displayCart();
