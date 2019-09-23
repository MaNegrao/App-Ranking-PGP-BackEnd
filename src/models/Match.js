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
CREATE TABLE public."match" (
	"date" date NULL,
	status bpchar(1) NULL,
	id serial NOT NULL,
	CONSTRAINT match_pkey PRIMARY KEY (id)
);
*/