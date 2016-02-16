'use strict'

// For educational purposes, we have put the entire angular app in one file.  Don't try this at home.  It is not safe.
var app = angular.module('app', []);

app.directive('mainHeader', function() {
  return {
  	restrict: 'A',
    templateUrl: '/templates/header.html'
  }
})

app.directive('listItem', function() {
  return {
    templateUrl: '/templates/listItem.html',
    controller: 'MainCtrl',
    scope: {
      content:'=content'
    }
  }
})

app.controller('MainCtrl', function($scope) {
	
})


// $(document).ready(function() {
// 	// This runs when the document loads
// 	$.ajax('/api/activities')
// 	.then(function(data) {
// 		data.forEach(function(activity) {

// 			var value = activity._id;
// 			var name = activity.name;
// 			$('#activity-selector')
// 			.append('<option value="' + value + '">' + name + '</option>')

// 			// We make an object where all the keys are the IDs of the activities, and the values are the names of the activities.  This will help us look up the names by ID later on
// 			all_activities[value] = name;
// 		})
// 	})
// 	// This also runs when the document loads
// 	$.ajax('/api/listItems')
// 	.then(function(listItems) {
// 		var todos = listItems.filter(function(item) {
// 			return item.status === 'todo';
// 		});
// 		var completes = listItems.filter(function(item) {
// 			return item.status === 'complete';
// 		});
// 		todos.forEach(function(item) {
// 			$('#todo-list').append('<li itemId="' + item._id + '">' + xButton + item.activity.name + forwardButton +'</li>');
// 		});
// 		completes.forEach(function(item) {
// 			$('#complete-list').append('<li itemId="' + item._id + '">' + backwardButton + item.activity.name + xButton + '</li>');
// 		});
// 	})


// 	$('#addActivity').on('click', function() {
// 		// .val() will give us the ID.  This ID is the key to the key-value pair for _id and name.
// 		var activityId = $('#activity-selector').val();
// 		var chosen = all_activities[activityId];

// 		$.post('/api/listItems', {activity: activityId})
// 		.then(function(item) {
// 			$('#todo-list').append('<li itemId="' + item._id + '">' + xButton + chosen + forwardButton + '</li>');
// 		}).then(null, function(err) {
// 			console.log(err);
// 		});
// 	})

// 	$('#todo-list').on('click', '.forward', function() {
// 		var self = $(this);
// 		var parent = self.parent();
// 		$.ajax('/api/listItems/' + parent.attr('itemId'), {
// 			method: 'PUT',
// 			data: {status: 'complete'}
// 		})
// 		.then(function() {
// 			parent.remove();
// 			parent.children().remove();
// 			parent.prepend($(backwardButton)).append($(xButton));
// 			$('#complete-list').append(parent);
// 		}).then(null, function(err) {
// 			console.log(err);
// 		});
// 	})

// 	$('#complete-list').on('click', '.backward', function() {
// 		var self = $(this);
// 		var parent = self.parent();
// 		$.ajax('/api/listItems/' + parent.attr('itemId'), {
// 			method: 'PUT',
// 			data: {status: 'todo'}
// 		})
// 		.then(function() {
// 			parent.remove();
// 			parent.children().remove();
// 			parent.append($(forwardButton)).prepend($(xButton));
// 			$('#todo-list').append(parent);
// 		}).then(null, function(err) {
// 			console.log(err);
// 		});
// 	})

// 	$('.lists').on('click', '.x', function() {
// 		var self = $(this);
// 		var parent = self.parent();
// 		$.ajax('/api/listItems/' + parent.attr('itemId'), {
// 			method: 'DELETE'
// 		}).then(function() {
// 			parent.remove();
// 		}).then(null, function (err) {
// 			console.log(err);
// 		})
// 	})
// })

// function moveListItem(item, newStatus) {
// 	$.ajax('/api/listItems/' + item.attr('itemId'), {
// 		method: 'PUT',
// 		data: {status: newStatus}
// 	})
// 	.then(function() {
// 		item.remove();
// 		item.children().remove();
// 		item.append($(forwardButton)).prepend($(xButton));
// 		$('#' + newStatus + '-list').append(item);
// 	}).then(null, function(err) {
// 		console.log(err);
// 	});
// }


