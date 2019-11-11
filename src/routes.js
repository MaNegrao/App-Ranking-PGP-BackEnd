const express = require('express');
const authMiddleware = require("./middlewares/auth");
const routes = express.Router();

const PlayerController = require('./controllers/PlayerController');
const SessionController = require('./controllers/SessionController');
const SearchController = require('./controllers/SearchController');
/*
const TeamController = require('./controllers/TeamController');
cost MatchController = require('./controllers/MatchController');
*/

routes.post('/players', PlayerController.create)
routes.post('/authenticate', SessionController.authenticate)

// intercepta as requisições apartir daqui
routes.use(authMiddleware);

routes.get('/search/:user_string', SearchController.search)

/*
routes.get('/players', PlayerController.index)
routes.get('/players/:nick', PlayerController.read)
routes.put('/players/:nick', PlayerController.update)
routes.delete('/players/:nick', PlayerController.delete)

routes.get('/teams', TeamController.index)
routes.post('/teams', TeamController.create)
routes.get('/teams/:id', TeamController.read)
routes.put('/teams/:id', TeamController.update)
routes.delete('/teams/:id', TeamController.delete)

routes.get('/plays', TeamController.index)
routes.post('/plays', TeamController.create)
routes.get('/plays/:id', TeamController.read)
routes.put('/plays/:id', TeamController.update)
routes.delete('/plays/:id', TeamController.delete)

routes.get('/matches', MatchController.index)
routes.post('/matches', MatchController.create)
routes.get('/matches/:id', MatchController.read)
routes.put('/matches/:id', MatchController.update)
routes.delete('/matches/:id', MatchController.delete)
*/

module.exports = routes;