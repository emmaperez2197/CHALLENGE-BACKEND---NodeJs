const express = require('express');

const Personaje = require('../../models/Personajes');
const { db } = require('../../../modules/database/Sequelize');

const app = express.Router();

const handler = () => {
	console.log('entro');
};

app.post('/', handler);

module.exports = { app, handler };
