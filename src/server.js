//importar dependencia
const express = require('express')

//Iniciando o express
const server  = express()

//criar a rota
server.get('/', (request, response) => {
  return response.send('Oi! Direto do Back-end')
})

//ligar o servidor
server.listen(5500)