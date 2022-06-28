require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const { db } = require('./modules/database/Sequelize');

const app = express();

async function dbConnection() {
	try {
		await db.authenticate();
		return console.log('connect database');
	} catch(error) {
		return console.log(error);
	}
}

dbConnection();

app.use(morgan('dev'));
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

/* eslint-disable */
app.listen(process.env.PORT, () => {
	console.log('listening to port:', process.env.PORT);
});


