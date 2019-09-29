module.exports = (sequelize, DataTypes) => {
    const Team = sequelize.define('Team', {
        id: {
            type: DataTypes.INTEGER,
            required: true,
            primaryKey: true,
            autoIncrement: true
        },
        score: DataTypes.INTEGER,
        win: DataTypes.INTEGER,
    }, {
        timestamps: false,
        freezeTableName: true,
        tableName: 'team'
    });

    return Team;
}

/*
CREATE TABLE team (
    score INTEGER,
    id SERIAL PRIMARY KEY,
    win INTEGER,
    fk_match_id INTEGER
);
*/