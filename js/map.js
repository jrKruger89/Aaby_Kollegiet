const markers = document.querySelectorAll(".location_item");

// Initialize the map.
mapboxgl.accessToken =
    "pk.eyJ1IjoiamVzcGVyLXItayIsImEiOiJja25pcWV1ZjUyMnc3Mm9vYTNtdWN2Z2IxIn0.0Y5RNxNO7rws0w_dtR0_Bw";

let aaby_kollegiet = [10.166067076709203, 56.149922650339484];
let uni = [10.202750692552613, 56.16796028276756];
let map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: aaby_kollegiet,
    zoom: 15,
});

markers.forEach((item) => {
    item.addEventListener("click", () => {
        map.flyTo({
            center: uni,
            zoom: 15,
        });
    });
});
// create the popup
let popup = new mapboxgl.Popup({ offset: 25 }).setText(
    "Åbykollegiet, du er her!"
);
// Create a default Marker and add it to the map.
new mapboxgl.Marker().setLngLat(aaby_kollegiet).setPopup(popup).addTo(map);
