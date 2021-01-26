'use strict';

//cria uma nova partida
module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('match', [{
        date: new Date(),
        status: 'acabou'
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('match', null, {});
  }
};
