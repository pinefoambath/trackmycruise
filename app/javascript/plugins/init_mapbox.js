import mapboxgl from 'mapbox-gl';

const initMapbox = () => {
  const mapElement = document.getElementById('map');
  localStorage.longitude = 0;
  localStorage.latitude = 0;
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
      .setLngLat([localStorage.longitude, localStorage.latitude])
      .addTo(map);

    function onDragEnd() {
      var lngLat = marker.getLngLat();
      // console.log(lngLat);
      coordinates.style.display = 'block';
      coordinates.innerHTML =
        'Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat;
        localStorage.longitude = lngLat.lng;
        localStorage.latitude = lngLat.lat;
    }

    marker.on('dragend', onDragEnd);
  }


};

export { initMapbox };
