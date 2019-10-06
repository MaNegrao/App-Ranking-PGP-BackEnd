'use strict';
module.exports = (sequelize, DataTypes) => {
  const Player = sequelize.define('Player', {
      name: { 
          type: DataTypes.STRING, 
          required: true 
      },
      email: { 
          type: DataTypes.STRING,
          required: true,
      },
      pic_path: DataTypes.STRING,
      password: { 
          type: DataTypes.STRING,
          required: true,
      },
      nick: { 
          type: DataTypes.STRING,
          required: true,
      },
      wins: { 
          type: DataTypes.INTEGER,
          required: true
      }
  }, {
      timestamps: false,
      freezeTableName: true,
      tableName: 'player'
  });
  Player.associate = function(models) {
    Player.belongsToMany(models.Team, {as: 'teams', through: 'player_team', foreignKey: 'id_player'})
  };
  return Player;
};