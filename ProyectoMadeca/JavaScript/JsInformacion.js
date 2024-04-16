function iniciarMap(){
    var coord = {lat:10.027496 ,lng: -84.2781948};
    var map = new google.maps.Map(document.getElementById("mapa"),{
      zoom: 14,
      center: coord
    });
    var marker = new google.maps.Marker({  //Coloca un marcador en el mapa 
      position: coord,
      map: map
    });

    //Key AIzaSyDeZja9xleZ_sxLb8FUkgcLva8_70KiWUk
}

$(document).ready(function () {
  $('#myForm').submit(function (e) {
    var name = $('#inputGroup-sizing-default').val();
    var email = $('#exampleFormControlInput1').val();
    var error = '';

    if (!name || !email) {
      error = 'Por favor complete todos los campos.';
    } else if (!isValidEmail(email)) {
      error = 'Por favor ingrese un correo electrónico válido.';
    }

    if (error) {
      $('.error').html(error);
      e.preventDefault();
    }
  });

  function isValidEmail(email) {
    var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return pattern.test(email);
  }
});
