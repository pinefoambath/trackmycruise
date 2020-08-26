import mapboxgl from 'mapbox-gl';

const initMapbox = () => {
  const mapElement = document.getElementById('map');

  if (mapElement) { // only build a map if there's a div#map to inject into
    mapboxgl.accessToken = mapElement.dataset.mapboxApiKey;
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v10',
      center: [0, 0],
      zoom: 2
    });

    var marker = new mapboxgl.Marker({
      draggable: true
    })
      .setLngLat([0, 0])
      .addTo(map);

    function onDragEnd() {
      var lngLat = marker.getLngLat();
      coordinates.style.display = 'block';
      coordinates.innerHTML =
        'Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat;
    }

    marker.on('dragend', onDragEnd);
  }
};

export { initMapbox };
