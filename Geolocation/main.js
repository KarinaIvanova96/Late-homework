(function () {
    'use strict';
    window.addEventListener('load', function () {
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

var mymap = L.map('mapid').setView([34.960, 137.708], 5);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    maxZoom: 18,
    id: 'mapbox.light',
    accessToken: 'pk.eyJ1IjoiZW5pbGUiLCJhIjoiY2p1YjJyNXBxMDF6ZjQwcW11YWVza3V1MiJ9.jZAx0vJkhCGuesLgc8cDEg'
}).addTo(mymap);

    L.marker([35.686, 139.742]).addTo(mymap)
    .bindPopup("Hotel Monterey Hanzomon.</br>Address: 23− 1;</br>Ichibancho, Chiyoda City, Tokyo 102-0082, Japan;</br>Telephone: +81 3-3556-7111");

    L.marker([35.701, 139.413]).addTo(mymap)
    .bindPopup("Palace Hotel Tachikawa.</br>Address: 23− 1;</br>2-40-15 Akebonocho, Tachikawa, Tokyo 190-0012, Japan;</br>Telephone: +81 42-527-1111");

    L.marker([35.656, 139.394]).addTo(mymap)
    .bindPopup("Keio PlazaHotel Hachioji.</br>Address: 14-;</br>Asahicho, Hachioji, Tokyo 192-0083, Japan;</br>Telephone: +81 42-656-3111");

    L.marker([35.796, 139.218]).addTo(mymap)
    .bindPopup("Okutamaji.</br>Address:  2 Chome-371 Futamatao;</br>Ome, Tokyo 198-0171, Japan;</br>Telephone: +81 428-78-9711");

