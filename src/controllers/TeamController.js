const { Team }  = require('../models')

module.exports = {
  async index(req, res){
    const teams = await Team.findAll();

    return res.json(teams);
  },

  async create(req, res){
    if(req.body){
      const team = await Team.create(req.body);

      return res.json(team);
    }
    //tratar erro
  },

  async read(req, res){
    const id = parseInt(req.params.id);
    if(id){
      const team = await Team.findOne({ where: {id} });

      return res.json(team);
    }
    //tratar erro
  },

  async update(req, res){
    const id = parseInt(req.params.id);
    const { score, win } = req.body;

    const team = await Team.findOne({ where: { id } });

    team.update({
        score, 
        win
    }).then(() => {})

    res.json(team);
  },

  async delete(req, res){
    const id = parseInt(req.params.id); 

    await Team.destroy({ where: {id} });

    res.sendStatus(200);
  }
}