let map;
let markers = [];
let polyline;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 19.35060438789892, lng: -99.1556678893106 },
        zoom: 16
    });

    document.getElementById('addMarker').addEventListener('click', addMarker);
    document.getElementById('drawRoute').addEventListener('click', drawRoute);
}


function addMarker() {
    const marker = new google.maps.Marker({
        position: map.getCenter(),
        map: map,
        draggable: true
    });
    markers.push(marker);

    // Agregar un marcador en una ubicación fija
    marker = new google.maps.Marker({
        position: { lat: 19.35060438789892, lng: -99.1556678893106 },
        map: map,
        title: 'Pilares El Parian'
    });

    // Agrega un evento para obtener la posición actual del marcador
    google.maps.event.addListener(marker, 'dragend', function() {
        console.log(marker.getPosition());
    });
}
function drawRoute() {
    if (markers.length < 2) {
        alert('Debes agregar al menos dos marcadores');
        return;
    }

    const path = markers.map(marker => marker.getPosition());
    polyline = new google.maps.Polyline({
        path: path,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
    });
    polyline.setMap(map);
}



