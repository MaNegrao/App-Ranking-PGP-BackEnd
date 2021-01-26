'use strict';
module.exports = (sequelize, DataTypes) => {
  const PlayerTeam = sequelize.define('PlayerTeam', {
    player_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Player',
        key: 'id'
      }
    },
    team_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Team',
        key: 'id'
      }
    },    
  }, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'player_team'
  });
  PlayerTeam.associate = function(models) {
    // associations can be defined here
  };
  return PlayerTeam;
};