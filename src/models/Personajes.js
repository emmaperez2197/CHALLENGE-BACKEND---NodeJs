const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../modules/database/database');

class Personaje extends Model {}
// inicializo
Personaje.init({
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
		type: DataTypes.INTEGER.UNSIGNED,
		allowNull: false
	},
	peso: {
		type: DataTypes.INTEGER.UNSIGNED,
		allowNull: false
	},
	pelicula: {
		type: DataTypes.STRING

	}

}, {
	sequelize, // We need to pass the connection instance
	modelName: 'personaje'
});
module.exports = Personaje;
