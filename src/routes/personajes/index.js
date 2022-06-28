const nameModule = 'personaje/';

const { app: create } = require('./Personajes');

module.exports = define => {
	define(nameModule + 'create', create);
};
