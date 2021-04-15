// Initialize the map.
mapboxgl.accessToken =
    "pk.eyJ1IjoiamVzcGVyLXItayIsImEiOiJja25pcWV1ZjUyMnc3Mm9vYTNtdWN2Z2IxIn0.0Y5RNxNO7rws0w_dtR0_Bw";
let map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: [10.166067076709203, 56.149922650339484],
    zoom: 15,
});

// Create a default Marker and add it to the map.
let aaby_kollegiet = new mapboxgl.Marker()
    .setLngLat([10.166067076709203, 56.149922650339484])
    .addTo(map);
