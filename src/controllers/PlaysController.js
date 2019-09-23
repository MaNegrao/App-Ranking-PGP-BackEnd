const { Plays }  = require('../models')

module.exports = {
    async index(req, res){
      const Plays = await Plays.findAll();
  
      return res.json(Plays);
    },
  
    async create(req, res){
      if(req.body){
        const Plays = await Plays.create(req.body);
  
        return res.json(Plays);
      }
      //tratar erro
    },
  
    async read(req, res){
      const id = parseInt(req.params.id);
      if(id){
        const Plays = await Plays.findOne({ where: {id} });
  
        return res.json(Plays);
      }
      //tratar erro
    },
  
    async update(req, res){
      const id = parseInt(req.params.id);
      const { score, win } = req.body;
  
      const Plays = await Plays.findOne({ where: { id } });
  
      Plays.update({
          score, 
          win
      }).then(() => {})
  
      res.json(Plays);
    },
  
    async delete(req, res){
      const id = parseInt(req.params.id); 
  
      await Plays.destroy({ where: {id} });
  
      res.sendStatus(200);
    }
  }