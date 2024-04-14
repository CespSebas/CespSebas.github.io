/*
document.addEventListener('keyup', e => {

console.log(e.target.value);

});


document.getElementById("search-input").addEventListener("keyup", function() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('search-input');
    filter = input.value.toUpperCase();
    ul = document.getElementById("results");
    li = ul.getElementsByTagName('li');

    // Iterar sobre todos los elementos de la lista y ocultar los que no coincidan con la búsqueda
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  });
  */

document.addEventListener('keyup', e => {

  e.target.matches('#search-input');

  console.log(e.target.value);

});

// ====================================================

// Api Weather

let lon;
let lat;

let temperature = document.querySelector(".temp");
let summary = document.querySelector(".summary");
let loc = document.querySelector(".location");
let icon = document.querySelector(".icon");
const kelvin = 273.15;

window.addEventListener("load", () => {



  if (navigator.geolocation) {

    navigator.geolocation.getCurrentPosition((position) => {


      console.log(position);
      lon = position.coords.longitude;
      lat = position.coords.latitude;

      const api = "93ee5cc5c2b2484629d31a41a6c49606";  // key de mi cuenta  


      const url =  'https://api.openweathermap.org/data/2.5/weather?lat=10.027496&lon=-84.2781948&appid=93ee5cc5c2b2484629d31a41a6c49606';

      fetch(url)

        .then((response) => {

          console.log("Respuesta del JSON");

          return response.json();
        })

        .then((data) => {

          console.log("Esta es la data");
          console.log(data);

          temperature.textContent = Math.floor(data.main.temp - kelvin) + "°C";

          summary.textContent = data.weather[0].description;  // [0] porque viene representado como un objeto 

          loc.textContent = data.name + ", " + data.sys.country;


        });


    });

  }


});

