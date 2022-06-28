require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const routes = require('./src/routes/index');

const sequelize = require('./modules/database/database');

const app = express();

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
	//connect database
 	// si esta en true reinicia las tablas constantemente
	sequelize.sync({force: false})
		.then(() => {
			console.log('connect database');
		}).catch((err) => {
			console.log(err);
		});
});


routes(app);

module.exports = app;


