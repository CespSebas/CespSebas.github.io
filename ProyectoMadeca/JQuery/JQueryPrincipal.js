$(document).ready(function () { //Ejecutandolo dentro de este .ready nos aseguramos que la pagina a terminado completamente de cargar 

    $(".card").hide();   //Oculta el apartado 

    $(".btnMostrar").click(function () {
        $(".card").slideDown();
        $("#articlePrueba").fadeIn();
    });

    $(".btnOcultar").click(function () {    // Metodo de acordeon
        $(".card").slideUp();

    });

    $("h3").hover(function () {                 // Cambia el tama;o de la letra al pasar por encima 
        $(this).css('font-size', '50px');
    }, function () {
        $(this).css('font-size', '30px');
    });

    $(".DivHistoria").hide().fadeIn(5000);     // Muestra las imágenes dentro de DivHistoria con fadeIn de 5s.

    $( function() {
        var availableTags = [
          "Pino",
          "Cedro",
          "Teca",
          "Laurel",
          "Llavin",
          "Puertas",
          "Pintura",
          "Lentes",
          "Cemento",
          "Cartel"
           
        ];
        $( "#search-input" ).autocomplete({
          source: availableTags
        });
      } );
      

});

