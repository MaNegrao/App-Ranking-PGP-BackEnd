const { Player } = require('../models');
const jwt = require("jsonwebtoken");

module.exports = {
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
          return res.status(500).json({ error: "Autenticação de usuário falhou", err: err });
        }
      }
}