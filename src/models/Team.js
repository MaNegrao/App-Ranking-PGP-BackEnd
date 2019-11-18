'use strict';
module.exports = (sequelize, DataTypes) => {
  const Team = sequelize.define('Team', {
    score: DataTypes.INTEGER,
    win: DataTypes.INTEGER,
    match_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Match',
        key: 'id'
      }
    },  
  }, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'team'
  });
  Team.associate = function(models) {
    Team.belongsToMany(models.Player, {as: {singular:'player', plural:'players'}, through: 'player_team', foreignKey: 'team_id'});
    Team.belongsTo(models.Match, {foreignKey: 'match_id', targetKey: 'id'})
  };
  return Team;
};