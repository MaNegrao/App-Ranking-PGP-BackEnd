'use strict';

const { Match, Team, Player } = require('../../src/models');

/* 
  Procura a partida criada anteriormente, cria dois novos times, acha os players cadastrados previamente e associa players e team.
  sql para teste:
  
  select 
    match.id, 
    team.score, 
    p.name 
    from "match" 
    join "team" on "team".match_id = "match".id 
    join "player_team" on "player_team".team_id = team.id 
    join player p on p.id = "player_team".player_id;
*/

module.exports = {
  up: async(queryInterface, Sequelize) => {
      const match = await Match.findOne();
      const match_id = match.id;
      
      const team1 = await Team.create({ score: 12, win: 1, match_id});
      const team2 = await Team.create({ score: 3 , win: 0, match_id});

      const vitor = await Player.findOne({where:{nick:'vitor'}});
      const nicol = await Player.findOne({where:{nick:'nicolas'}});
      const willi = await Player.findOne({where:{nick:'willian'}});
      const mathe = await Player.findOne({where:{nick:'matheus'}});

      return queryInterface.bulkInsert('player_team', [
        {
          player_id: vitor.id,
          team_id: team1.id
        },
        {
          player_id: nicol.id,
          team_id: team1.id
        },
        {
          player_id: willi.id,
          team_id: team2.id
        },
        {
          player_id: mathe.id,
          team_id: team2.id
        },
      ], {});
  },

  down: async(queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('player_team', null, {});
      return queryInterface.bulkDelete('team', null, {});
  }
};
