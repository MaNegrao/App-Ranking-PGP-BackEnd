const express = require('express');
const routes = express.Router();

const PlayerController = require('./controllers/PlayerController');

// retorna todos os players
app.get('/players', PlayerController.index)

app.post('/players', PlayerController.create)
app.get('/players/:nickname', PlayerController.read)
app.put('/players/:id', PlayerController.update)
app.delete('/players/:id', PlayerController.delete)

module.exports = routes;