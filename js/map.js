import L from 'leaflet'
import 'leaflet-routing-machine'

const map = L.map('campus-map').setView([49.243452155683876, 7.015322530121894], 17);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let userMarker;
let routingControl;

if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function (position) {
        const userCoords = [position.coords.latitude, position.coords.longitude];

        userMarker = L.marker(userCoords, {
            icon: L.icon({
                iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png',
                shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                shadowSize: [41, 41]
            })
        }).addTo(map);

        // map.setView(userCoords, 18);
    });
} else {
    alert("Geolocalisation ist not supported on this browser.");
}

const coords = {
    campus: { lat: 49.243452155683876, lon: 7.015322530121894, name: "Campus Rotenbühl" },
    secretariat: { lat: 49.24372095201204, lon: 7.015624183341854, name: "Sekretariat" },
    bibliothek: { lat: 49.243579115889254, lon: 7.014355498505965, name: "Bibliothek" },
    mensa: { lat: 49.24359137334805, lon: 7.015050190593755, name: "Mensa" },
    senat: { lat: 49.24317987128229, lon: 7.015098470352752, name: "Senatsaal" },
    labor: { lat: 49.24313609426495, lon: 7.0146961390277776, name: "IT-Labore" },
    entrance: { lat: 49.24367367335481, lon: 7.015905815248975, name: "Eingang Ost" },
    terasse: { lat: 49.2436246435831, lon: 7.015141385731521, name: "Außenterasse" },
};

const campusCoords = [coords.campus.lat, coords.campus.lon]
for (const key in coords) {
    const point = coords[key];
    L.marker([point.lat, point.lon], {
        icon: L.icon({
            iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
        })
    })
    .addTo(map)
    .bindPopup(point.name, { autoClose: false, offset: [0, -5] })
    .on('click', function () {
        calculateRoute([point.lat, point.lon]);
    });
}
map.setView(campusCoords, 18);

function calculateRoute(destinationCoords) {
    if (routingControl) {
        map.removeControl(routingControl);
    }

    if (userMarker) {
        const userCoords = userMarker.getLatLng();

        routingControl = L.Routing.control({
            waypoints: [
                L.latLng(userCoords.lat, userCoords.lng), 
                L.latLng(destinationCoords[0], destinationCoords[1]) 
            ],
            routeWhileDragging: true,
            show: true,
            addWaypoints: false,
            draggableWaypoints: false,
            fitSelectedRoutes: true,
        }).addTo(map);
    } else {
        alert("User position ist not available.");
    }
}