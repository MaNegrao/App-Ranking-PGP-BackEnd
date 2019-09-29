const { Player }  = require('../models')

module.exports = {
  async index(req, res){
    const players = await Player.findAll();

    return res.json(players);
  },

  async create(req, res){
    if(req.body){
      const player = await Player.create(req.body);

      return res.json(player);
    }
    //tratar erro
  },

  async read(req, res){
    const nick = req.params.nick;
    if(nick){
      const player = await Player.findOne({ where: {nick} });

      return res.json(player);
    }
    //tratar erro
  },

  async update(req, res){
    const nick = req.params.nick;
    const { name, email, pic, password, wins } = req.body;


    const player = await Player.findOne({ where: { nick } });

    player.update({ 
      name, 
      email, 
      pic, 
      password, 
      wins
    })
    
    res.json(player);
      //tratar erro
  },

  async delete(req, res){
    const nick = req.params.nick; 

    await Player.destroy({ where: { nick } });

    res.send(200)
  }
}