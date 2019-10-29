const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const path = require('path');
const exphbs = require('express-handlebars');
const routes = require('./routes/handlers');
require('dotenv').config();
const sendMail = require('./mail');

const PORT = process.env.PORT || 3000;
const app = express();

//app.use(bodyParser.urlencoded({ extended: true }));

// Set the static folder
app.use(express.static(path.join(__dirname, 'public')));

// Data parsing
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

// Handlebars Middleware
app.engine('handlebars', exphbs({defaultLayout : 'main'}));
app.set('view engine', 'handlebars');

app.use('/', routes);

// Server start
app.listen(PORT, () => {console.log(`The server is running on port ${PORT}`)});