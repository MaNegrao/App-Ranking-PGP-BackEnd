'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('team', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      score: {
        type: Sequelize.INTEGER
      },
      win: {
        type: Sequelize.INTEGER
      },
      match_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            schema: 'public',
            tableName: 'match'
          },
          key: 'id'
        }        
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('team');
  }
};