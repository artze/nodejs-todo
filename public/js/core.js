var nodeTodo = angular.module('nodeTodo', []);

nodeTodo.controller('mainController', function($scope, $http) {
	$scope.formData = {};

	$http.get('/api/todos')
		.then(function(res) {
			$scope.todos = res.data;
			console.log(res.data);
		},

		function(res) {
			console.log('Error: ' + res.data);
		})

	$scope.createTodo = function() {
		$http.post('/api/todo', $scope.formData)
			.then(function(res) {
				$scope.formData.task = '';
				$scope.todos = res.data;
				console.log(res.data)
			},

			function(res) {
				console.log('Error: ' + res.data)
			})
	}

	$scope.deleteTodo = function(id) {
		$http.delete('/api/todo/' + id)
			.then(function(res) {
				$scope.todos = res.data;
				console.log(res.data)
			},

			function(res) {
				console.log('Error: ' + res.data)
			})
	}
})