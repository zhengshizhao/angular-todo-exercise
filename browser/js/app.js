'use strict'

// For educational purposes, we have put the entire angular app in one file.  Don't try this at home kids.
var app = angular.module('app', []);

app.controller('MainCtrl', function($scope) {
  $scope.items = [];
  
  //Creates an item object and adds it to the items array
  $scope.addItem = function(todoInput) {
    var listItem = {
      content: todoInput,
      complete: false
    }

    $scope.items.push(listItem)
  }
  
  //Finds a given item in the items array and removes it
  $scope.remove = function(item) {
    if($scope.items.indexOf(item) > -1) {
      var index = $scope.items.indexOf(item)
      $scope.items.splice(index, 1)
    }
  }
  
})

app.directive('listItem', function() {
  return {
    templateUrl: '/templates/listItem.html',
    scope: {
      //the fields 'item' and 'remove' that are on the parent scope will be available in this directive
      item:'=',
      remove:'='
    },
    // This function let's us control the directive.  We could have made a controller for this directive instead.
    link: function(scope, element, attrs) {
      scope.markComplete = function() {
        scope.item.complete = true;
      }
      
      scope.markIncomplete = function() {
        scope.item.complete = false;
      }
      
    }
  }
})

