//Create map
const map = L.map("mapid").setView([-3.6863998,-40.3475938], 15);

//Create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
.addTo(map);

//Create icon
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68]
})


let marker;

//create and add marker
map.on('click', (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector('[name=lat]').value = lat;
  document.querySelector('[name=lng]').value = lng;
  /**Remove icon */
  marker && map.removeLayer(marker)
  /**add icon layer */
  marker = L.marker([lat, lng], { icon })
  .addTo(map) 
})


