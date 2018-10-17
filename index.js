'use strict'

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
  response.render('home', {
    name: 'Arpan'
  })
})



// run the server after all the routes are loaded
app.listen(port);