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
        pic: DataTypes.STRING,
        password: { 
            type: DataTypes.STRING,
            required: true,
        },
        nick: { 
            type: DataTypes.STRING,
            required: true,
        },
        id: {
            type: DataTypes.INTEGER,
            required: true,
            primaryKey: true,
            autoIncrement: true
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