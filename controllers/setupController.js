// var Todos = require('../models/todoModel');

// module.exports = function(app) {
// 	app.get('/api/setupTodos', function(req, res) {
// 		var seedTodos = [{
// 			username: 'test',
// 			todo: 'Buy milk',
// 			isDone: false,
// 			hasAttachment: false
// 		},
// 		{
// 			username: 'test',
// 			todo: 'Feed dog',
// 			isDone: false,
// 			hasAttachment: false
// 		},
// 		{
// 			username: 'test',
// 			todo: 'Learn node',
// 			isDone: false,
// 			hasAttachment: false
// 		}]

// 		Todos.create(seedTodos, function(err, results) {
// 			res.send(results)
// 		})
// 	})
// }