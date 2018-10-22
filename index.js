'use strict';


// TODO shift the requirements to another file if possible
// require('./models/index');
const db = require('./models/index');
const User = require('./models/user')(db.sequelize, db.Sequelize);


const path = require('path');
const express = require('express');
const exphbr = require('express-handlebars');

const app = express();
const port = 8000;


// this loads the default layout for the server
// .engine defines which view layout are we using
app.engine('.hbs', exphbr({
	defaultlayout: 'main',
	extname: '.hbs',
	layoutsDir: path.join(__dirname, 'views/layouts')
}));


app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));




app.get('/', (request, response) => {
  String(parseInt(Math.random(1, 100) * 100));

  	// create a user on page load
	// User.create({name: "Arpan", email: "arpanarpan2002@gmail.com"}).then(user => {
	// 	console.log(user);
	// }).catch(error => {
	// 	console.log(error);
	// });


	// get all the users on page loading, this returns a promise, so we 
	let allUsers = User.all();

	// we need to call all the promises and when they all complete then we render the view
	Promise.all([allUsers]).then(data => {
	
		console.log(data[0][0][0]);
	// allUsers is still blank here because User.all returns a Promise which runs async
		return response.render('home', {
			users: data[0][0]
		})

	});

	
  
})



// run the server after all the routes are loaded
app.listen(port);