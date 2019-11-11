const { Player } = require('../models');

module.exports = {
  async index(req, res) {
    const players = await Player.findAll();

    return res.json(players);
  },

  async create(req, res) {
    const player = req.body;
    const { email, nick } = player;
    const erros = [];

    if (player) {
      const p1 = await Player.findOne({ where: { email } });
      const p2 = await Player.findOne({ where: { nick } });

      if (p1 !== null) {
        erros.push('Email já existe');
      }

      if (p2 !== null) {
        erros.push('Nick já existe');
      }

      if (erros.length) {
        return res.status(500).json(erros);
      }
    }

    if (player) {
      const retPlayer = await Player.create(req.body);

      return res.status(201).json(retPlayer);
    }
    // need put error here
    return null;
  },

  async read(req, res) {
    const { nick } = req.params;
    if (nick) {
      const player = await Player.findOne({ where: { nick } });

      return res.json(player);
    }
    // need put error here
    return null;
  },

  async update(req, res) {
    const { nick } = req.params;
    const {
      name,
      email,
      pic,
      password,
      wins,
    } = req.body;


    const player = await Player.findOne({ where: { nick } });

    player.update({
      name,
      email,
      pic,
      password,
      wins,
    });

    res.json(player);
  },

  async delete(req, res) {
    const { nick } = req.params;

    await Player.destroy({ where: { nick } });

    res.send(200);
  },
};
