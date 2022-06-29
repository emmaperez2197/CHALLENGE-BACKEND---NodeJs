const nameModule = 'personaje/';

const { app: create } = require('./create');

module.exports = define => {
	define(nameModule + 'create', create);
};
