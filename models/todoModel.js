var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var todoSchema = Schema({
	task: String,
})

var Todos = mongoose.model('Todos', todoSchema);

module.exports = Todos;