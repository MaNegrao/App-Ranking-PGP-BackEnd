const { Player }  = require('../models');
const Op = require('sequelize').Op;

const { status, sendError } = require('../status');

module.exports = {
  async search(req, res){
    const { user_string } = req.params;

    try {
        const players = await Player.findAll({ where: { nick: {[Op.like]: `%${user_string}%`} } }, { limit: 10 });    
        return res.json(players);
    } catch (error) {
        return sendError(res, status.SERVER_ERROR);
    }    
  },
}