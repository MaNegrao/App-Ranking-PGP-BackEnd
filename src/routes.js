const express = require('express');

const authMiddleware = require('./middlewares/auth');

const routes = express.Router();

const PlayerController = require('./controllers/PlayerController');
const SessionController = require('./controllers/SessionController');
const SearchController = require('./controllers/SearchController');
const GameController = require('./controllers/GameController');

routes.post('/players', PlayerController.create);
routes.post('/authenticate', SessionController.authenticate);

// intercepta as requisições apartir daqui
routes.use(authMiddleware);

routes.get('/search/:user_string', SearchController.search);

routes.post('/endgame', GameController.storeResult);

module.exports = routes;
