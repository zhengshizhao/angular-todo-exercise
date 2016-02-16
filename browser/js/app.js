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
    $scope.todoInput = ""
  }

  //Finds a given item in the items array and removes it
  $scope.remove = function(item) {
    //This helper method is defined at the bottom of this file
    utilsModule.remove($scope.items, item)
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

//This module contains some helpful methods
var utilsModule = {
  remove: function (array, item) {
    var index = array.indexOf(item);
    if (index === -1) return;
    return array.splice(index, 1);
  }

};

