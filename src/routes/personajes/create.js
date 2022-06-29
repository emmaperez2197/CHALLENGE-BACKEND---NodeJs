const express = require('express');

const Personaje = require('../../models/Personajes');

const app = express.Router();

const handler = async (req, res) => {

	const { name, edad, peso, pelicula } = req.body;
	const crearPersonaje = await Personaje.create({
		name,
		edad,
		peso,
		pelicula
	});

	res.status(200).json(crearPersonaje);
};

app.post('/', handler);

module.exports = { app, handler };
