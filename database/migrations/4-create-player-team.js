'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('player_team', {
      player_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            schema: 'public',
            tableName: 'player'
          },
          key: 'id'
        }
      },
      team_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            schema: 'public',
            tableName: 'team'
          },
          key: 'id'
        }        
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('player_team');
  }
};