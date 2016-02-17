'use strict'

// For educational purposes, we have put the entire angular app in one file.  Don't try this at home kids.
var app = angular.module('app', []);

app.controller('MainCtrl', function($scope) {
  $scope.items = [];

  //Creates an item object and adds it to the items array
  $scope.addItem = function(newItem) {
    var listItem = {
      task: newItem,
      complete: false
    }
    $scope.items.push(listItem);
    $scope.toDoInput="";
  }
  $scope.remove = function(itemToRemove){
    utilsModule.remove($scope.items, itemToRemove)
  }
  
})

app.directive('listItem', function(){
  return {
    restrict: 'E',
    templateUrl: '/templates/listItem.html',
    scope: {
      item: '=',
      remove: '='
    }, 

    link: function(scope){
      scope.mark = function(){
        scope.item.complete = !scope.item.complete;
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

