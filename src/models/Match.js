'use strict';
module.exports = (sequelize, DataTypes) => {
  const Match = sequelize.define('Match', {
    date: DataTypes.DATE,
    status: DataTypes.STRING
  }, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'match'
  });
  Match.associate = function(models) {
    Match.hasMany(models.Team, {as: 'teams', foreignKey: 'match_id'});
  };
  return Match;
};