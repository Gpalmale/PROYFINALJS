function initMap() {
    var mapOptions = {
      center: {lat: -33.49766648306272, lng: -70.75173053852697}, 
      zoom: 12 // Nivel de zoom del mapa
    };
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
  }