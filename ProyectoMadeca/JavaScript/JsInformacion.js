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