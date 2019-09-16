const express = require('express')
const bodyParser = require('body-parser')
const app = express()
var port = process.env.PORT || 8080;
const db = require('./queries')

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres Truco UFFS API' })
})

app.get('/players', db.getPlayers)
app.get('/players/:id', db.getPlayerById)
app.post('/players', db.createPlayer)
app.put('/players/:id', db.updatePlayer)
app.delete('/players/:id', db.deletePlayer)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})