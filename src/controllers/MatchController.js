const { Match }  = require('../models')

module.exports = {
    async index(req, res){
        const matches = await Match.findAll();
    
        return res.json(matches);
    },

    async create(req, res){
        if(req.body){
          const match = await Match.create(req.body);
    
          return res.json(match);
        }
        //tratar erro
    },

    async read(req, res){
        const id = parseInt(req.params.id);
        if(id){
          const match = await Match.findOne({ where: {id} });
    
          return res.json(match);
        }
        //tratar erro
    },    

    async update(req, res){
        const id = parseInt(req.params.id);
        const { /* data */ } = req.body;


        const match = await Match.findOne({ where: { id } });

        match.update({
            /* data */ 
        })
        
        res.json(match);
        //tratar erro
    },

    async delete(req, res){
        const id = parseInt(req.params.id); 

        await Match.destroy({ where: {id} });

        res.send(200)
    }    
}