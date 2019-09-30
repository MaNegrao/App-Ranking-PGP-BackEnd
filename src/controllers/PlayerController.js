const { Player }  = require('../models');
const jwt = require("jsonwebtoken");

module.exports = {
  async index(req, res){
    const players = await Player.findAll();

    return res.json(players);
  },

  async create(req, res){
    const player = req.body;
    const { email, nick } = player;
    const erros = []

    if(player){
      const p1 = await Player.findOne({ where: { email } });
      const p2 = await Player.findOne({ where: { nick } });

      if(p1 !== null){
        erros.push('Email já existe');
      }
      
      if(p2 !== null){
        erros.push('Nick já existe');
      }
      
      if(erros.length){
        return res.status(500).json(erros);
      }
    }

    if(player){
      const player = await Player.create(req.body);

      return res.status(201).json(player);
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
  },

  async authenticate(req, res) {
    try {
      const { email, password } = req.body;
  
      const player = await Player.findOne({ where: { email, password } });
  
      if (!player) {
        return res.status(400).json({ error: "Usuário e/ou senha incorretos!" });
      }
      
      const { id } = player;

      token = await jwt.sign({ id }, "secret", { expiresIn: 86400 });

      return res.json({
        player,
        token,
      });
    } catch (err) {
      return res.status(400).json({ error: "Autenticação de usuário falhou" });
    }
  }
}