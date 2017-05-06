var express = require('express');
var mongoose = require('mongoose');
var morgan = require('morgan');
var methodOverride = require('method-override')
var bodyParser = require('body-parser');

// var setupController = require('./controllers/setupController');
var apiController = require('./controllers/apiController');

var app = express();
var port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost/node-todo')

app.set('view engine', 'ejs');
app.use('/assets', express.static('./public'));
app.use(morgan('dev'));
app.use(methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// setupController(app);

app.get('', function(req, res) {
	res.render('./todos/index')
})

apiController(app);

app.listen(port, function() {
	console.log(`Express running on port ${port}`)
});