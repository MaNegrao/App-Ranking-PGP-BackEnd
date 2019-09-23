module.exports = (sequelize, DataTypes) => {
    const Plays = sequelize.define('Plays', {
        playerId: {
            type: DataTypes.INTEGER,
            // required: true,
            references: {
                model: 'Player',
                key: 'id'
            }
        },
        teamId: {
            type: DataTypes.INTEGER,
            // required: true,
            references: {
                model: 'Team',
                key: 'id'
            }
        },        
    }, {
        timestamps: false,
        freezeTableName: true,
        tableName: 'plays'
    });

    return Plays;
}

/*
CREATE TABLE public.plays (
	fk_player_id int4 NULL,
	fk_team_id int4 NULL
);

ALTER TABLE public.plays ADD CONSTRAINT fk_plays_1 FOREIGN KEY (fk_player_id) REFERENCES player(id) ON DELETE RESTRICT;
ALTER TABLE public.plays ADD CONSTRAINT fk_plays_2 FOREIGN KEY (fk_team_id) REFERENCES team(id) ON DELETE SET NULL;
*/