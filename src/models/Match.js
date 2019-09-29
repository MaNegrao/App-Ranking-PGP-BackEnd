module.exports = (sequelize, DataTypes) => {
    const Match = sequelize.define('Match', {
        date: DataTypes.DATE,
        status: DataTypes.STRING,
        id: {
            type: DataTypes.INTEGER,
            required: true,
            primaryKey: true,
            autoIncrement: true
        },
    }, {
        timestamps: false,
        freezeTableName: true,
        tableName: 'match'
    });

    return Match;
}

/*
CREATE TABLE match (
    date DATE NOT NULL,
    status CHAR NOT NULL,
    id SERIAL PRIMARY KEY
);
*/