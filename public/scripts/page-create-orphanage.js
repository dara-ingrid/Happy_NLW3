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


/**Add field of photos*/
function addPhotoField() {
  /**Pegar o container de fotos id="images"  linha 85-create orphanage */
  const container = document.querySelector('#images')
  //Pegar o container para duplicar  .new-image
  const fieldsContainer = document.querySelectorAll('.new-upload')
  //realizar o clone da última imagem adicinada
  const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
  //verificar se o campo está vazio. Se sim, não adicionar ao container de imagens
  const input = newFieldContainer.children[0]
  
  if (input.value == "") {
    return
  }
  //limpar o campo antes de adicionar ao container de imagens
  input.value = ""
  //adicionar o clone ao container de #images
  container.appendChild(newFieldContainer)
}

function deleteField(event) {
  const span = event.currentTarget

  const fieldsContainer = document.querySelectorAll('.new-upload')

  if (fieldsContainer.length <= 1){
    //limpar o valor do campo
    span.parentNode.children[0].value = ""
    return
  }

  //deletar o campo
  span.parentNode.remove()
}

//Select Yes or No
function toggleSelect(event) {
  //retirar a class .active (dos botões)
  document.querySelectorAll('.button-select button')
  .forEach(button => button.classList.remove('active'))
  //colocar a class .active no botão clicado
  const button = event.currentTarget
  button.classList.add('active')
  //atualizar o input hidden com o valor selecionado
  const input = document.querySelector('[name="open_on_weekends"]')
  
  input.value = button.dataset.value

}