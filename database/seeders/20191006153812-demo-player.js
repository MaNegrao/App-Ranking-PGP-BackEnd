'use strict';

// popula o banco com esses players
module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('player', [
      {
        name: 'Vitor',
        email: 'vitor@mail.com',
        pic_path: 'fotovitor.jpg',
        password: '123',
        nick: 'vitor',
        wins: 5
      },
      {
        name: 'Nicolas',
        email: 'nicolas@mail.com',
        pic_path: 'fotonicolas.jpg',
        password: '123',
        nick: 'nicolas',
        wins: 4
      },
      {
        name: 'Willian',
        email: 'willian@mail.com',
        pic_path: 'fotowillian.jpg',
        password: '123',
        nick: 'willian',
        wins: 5
      },
      {
        name: 'Matheus',
        email: 'matheus@mail.com',
        pic_path: 'fotomatheus.jpg',
        password: '123',
        nick: 'matheus',
        wins: 6
      },           
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('player', null, {});
  }
};
