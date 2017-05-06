var Todos = require('../models/todoModel');
var bodyParser = require('body-parser');

module.exports = function(app) {
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));

	app.get('/api/todos', function(req, res) {
		Todos.find({}, function(err, todos) {
			if(err) throw err;
			res.json(todos);
		})
	});

	app.get('/api/todo/:id', function(req, res) {
		Todos.findById(req.params.id, function(err, todo) {
			if(err) throw err;
			res.send(todo)
		})
	});

	app.post('/api/todo', function(req, res) {
		var newTodo = Todos({
			task: req.body.task
		})
		newTodo.save(function(err) {
			if(err) throw err;
			Todos.find({}, function(err, todos) {
				if(err) throw err;
				res.json(todos);
			})		
		})

	});

	app.delete('/api/todo/:id', function(req, res) {
		Todos.findByIdAndRemove(req.params.id, function(err) {
			if(err) throw err;
		})
		Todos.find({}, function(err, todos) {
			if(err) throw err;
			res.json(todos);
		})

	});
}