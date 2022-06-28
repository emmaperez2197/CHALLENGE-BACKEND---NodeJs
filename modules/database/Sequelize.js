const { Sequelize } = require('sequelize');

const db = new Sequelize('sequelize', 'root', 'Rico', {
	host: 'localhost',
	dialect: 'mysql'
});

module.exports = { db };
