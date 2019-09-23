module.exports = (sequelize, DataTypes) => {
    const Player = sequelize.define('Player', {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        pic: DataTypes.STRING,
        password: DataTypes.STRING,
        nick: DataTypes.STRING,
        id: {
            type: DataTypes.INTEGER,
            required: true,
            primaryKey: true,
            autoIncrement: true
        },
        wins: DataTypes.INTEGER,
    });

    return Player;
}

/*
CREATE TABLE player (
    name varchar(100) NOT NULL,
    email varchar(250) NOT NULL,
    pic bytea,
    password varchar(43) NOT NULL,
    nick varchar(50) NOT NULL,
    id SERIAL PRIMARY KEY,
    wins INTEGER NOT NULL,
    UNIQUE (nick, Id)
);
*/