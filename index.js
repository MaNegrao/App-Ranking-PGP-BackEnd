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
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/users', db.getPlayers)
app.get('/users/:id', db.getPlayerById)
app.post('/users', db.createPlayer)
app.put('/users/:id', db.updatePlayer)
app.delete('/users/:id', db.deletePlayer)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})