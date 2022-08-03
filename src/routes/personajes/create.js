const express = require('express');

const Personaje = require('../../models/Personajes');

const app = express.Router();

const handler = async (req, res) => {

	// const { name, edad, peso, pelicula } = req.body;
	// const crearPersonaje = await Personaje.create({
	// 	name,
	// 	edad,
	// 	peso,
	// 	pelicula
	// });

	// res.status(200).json(crearPersonaje);

	const { id } = req.params;

	const findByid = await Personaje.findByPk(id);
	res.status(200).json(findByid);
};

app.get('/:id', handler);

module.exports = { app, handler };
