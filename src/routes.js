const express = require('express');
const routes = express.Router();

const PlayerController = require('./controllers/PlayerController');
const TeamController = require('./controllers/TeamController');

// crud player
routes.get('/players', PlayerController.index)
routes.post('/players', PlayerController.create)
routes.get('/players/:nick', PlayerController.read)
routes.put('/players/:nick', PlayerController.update)
routes.delete('/players/:id', PlayerController.delete)

// crud team
routes.get('/teams', TeamController.index)
routes.post('/teams', TeamController.create)
routes.get('/teams/:id', TeamController.read)
routes.put('/teams/:id', TeamController.update)
routes.delete('/teams/:id', TeamController.delete)

// crud plays
routes.get('/plays', TeamController.index)
routes.post('/plays', TeamController.create)
routes.get('/plays/:id', TeamController.read)
routes.put('/plays/:id', TeamController.update)
routes.delete('/plays/:id', TeamController.delete)

// crud matches
routes.get('/matches', MatchController.index)
routes.post('/matches', MatchController.create)
routes.get('/matches/:id', MatchController.read)
routes.put('/matches/:id', MatchController.update)
routes.delete('/matches/:id', MatchController.delete)

module.exports = routes;