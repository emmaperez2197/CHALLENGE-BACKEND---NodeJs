const { DataTypes } = require('sequelize');
const { db } = require('../../modules/database/Sequelize');

const personaje = db.define('Personaje', {

	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false
	},
	edad: {
		type: DataTypes.INTEGER.UNSIGNED
	},
	peso: {
		type: DataTypes.INTEGER.UNSIGNED
	},
	peliculaOSerie: {
		type: DataTypes.STRING
	}
});

module.exports = personaje;
