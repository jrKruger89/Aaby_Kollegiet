const markers = document.querySelectorAll(".location_item");

// Initialize the map.
mapboxgl.accessToken =
    "pk.eyJ1IjoiamVzcGVyLXItayIsImEiOiJja25pcWV1ZjUyMnc3Mm9vYTNtdWN2Z2IxIn0.0Y5RNxNO7rws0w_dtR0_Bw";

// Koordinat variabler
let aaby_kollegiet = [10.166067076709203, 56.149922650339484];
let uni = [10.202750692552613, 56.16796028276756];
let eaa = [10.158744854401869, 56.119642213381205];
let tech = [10.126102948788015, 56.11442550953375];
let via = [10.152772515024827, 56.11355660896364];
let o1 = [10.182843502408948, 56.15684063401393];
let aarhus_c = [10.204559258462254, 56.15045325107968];
let e45 = [10.156061532398478, 56.13579001538214];

// Initialiser kortet
let map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: aaby_kollegiet,
    zoom: 15,
});

// Hent data fra li'erne
markers.forEach((item) => {
    item.addEventListener("click", () => {
        map.flyTo({
            center: [
                item.getAttribute("data-long"),
                item.getAttribute("data-lat"),
            ],
            zoom: 15,
        });
    });
});

// Popup section
let aaby_popup = new mapboxgl.Popup({ offset: 25 }).setText(
    "Åbykollegiet, du er her!"
);

let uni_popup = new mapboxgl.Popup({ offset: 25 }).setText("Århus Universitet");

let eaa_popup = new mapboxgl.Popup({ offset: 25 }).setText(
    "Erhvervsakademi Århus"
);

let tech_popup = new mapboxgl.Popup({ offset: 25 }).setText("Århus Tech");

let via_popup = new mapboxgl.Popup({ offset: 25 }).setText(
    "VIA University College"
);

let o1_popup = new mapboxgl.Popup({ offset: 25 }).setText("Indre Ringgade, O1");

let aarhus_c_popup = new mapboxgl.Popup({ offset: 25 }).setText(
    "Aarhus midtby"
);

let e45_popup = new mapboxgl.Popup({ offset: 25 }).setText(
    "Jyske motorvej, E45"
);

// Aabykollegiet marker
let aaby_styling = document.createElement("div");
aaby_styling.className = "custom_marker";
aaby_styling.style.backgroundImage = "url(../img/icon.png)";

let aaby_marker = new mapboxgl.Marker(aaby_styling, { offset: [0, 0] })
    .setLngLat(aaby_kollegiet)
    .setPopup(aaby_popup)
    .addTo(map);

// Universitets marker
let uni_styling = document.createElement("div");
uni_styling.className = "custom_marker";
uni_styling.style.backgroundImage = "url(../img/aulogo.jpeg)";

let uni_marker = new mapboxgl.Marker(uni_styling, { offset: [0, 0] })
    .setLngLat(uni)
    .setPopup(uni_popup)
    .addTo(map);

// EAAA marker
let eaa_styling = document.createElement("div");
eaa_styling.className = "custom_marker";
eaa_styling.style.backgroundImage = "url(../img/erhversakademi-aarhus.png)";

let eaa_marker = new mapboxgl.Marker(eaa_styling, { offset: [0, 0] })
    .setLngLat(eaa)
    .setPopup(eaa_popup)
    .addTo(map);

//Tech marker
let tech_styling = document.createElement("div");
tech_styling.className = "custom_marker";
tech_styling.style.backgroundImage = "url(../img/techlogo.png)";

let tech_marker = new mapboxgl.Marker(tech_styling, { offset: [0, 0] })
    .setLngLat(tech)
    .setPopup(tech_popup)
    .addTo(map);

// VIA marker
let via_styling = document.createElement("div");
via_styling.className = "custom_marker";
via_styling.style.backgroundImage = "url(../img/viauc.png)";

let via_marker = new mapboxgl.Marker(via_styling, { offset: [0, 0] })
    .setLngLat(via)
    .setPopup(via_popup)
    .addTo(map);

// Ringgade marker
let o1_marker = new mapboxgl.Marker()
    .setLngLat(o1)
    .setPopup(o1_popup)
    .addTo(map);

// Aarhus C marker
let aarhus_c_marker = new mapboxgl.Marker()
    .setLngLat(aarhus_c)
    .setPopup(aarhus_c_popup)
    .addTo(map);

// E45 marker
let e45_marker = new mapboxgl.Marker()
    .setLngLat(e45)
    .setPopup(e45_popup)
    .addTo(map);

// Marker styling
const marker_styling = document.querySelectorAll(".custom_marker");
marker_styling.forEach((marker) => {
    marker.style.width = "75px";
    marker.style.height = "75px";
    marker.style.border = "1px solid black";
    marker.style.borderRadius = "50%";
    marker.style.backgroundColor = "white";
    marker.style.backgroundPosition = "center";
    marker.style.backgroundRepeat = "no-repeat";
    marker.style.backgroundSize = "contain";
});
