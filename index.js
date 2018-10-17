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
	User.create({name: "Arpan", email: "arpansac@gmail.com"}).then(user => {
		console.log(user);
	}).catch(error => {
		console.log(error);
	});


	// get all the users on page loading
	let allUsers = User.all().then(users => {

		return users; 
	}).catch(error => {
		throw 500;
	});




	// allUsers is still blank here because User.all returns a Promise which runs async
	response.render('home', {
		users: allUsers
	})

  
})



// run the server after all the routes are loaded
app.listen(port);