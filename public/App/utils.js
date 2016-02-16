'use strict';

var utilsModule = {

  merge: function (source, target) {
    Object.keys(source).forEach(function (key) {
      target[key] = source[key];
    });
  },

  pushUnique: function (array, item) {
    var alreadyIn = array.some(function (elem) {
      return elem._id == item._id;
    });
    if (alreadyIn) return;
    return array.push(item);
  },

  remove: function (array, item) {
    var index = array.indexOf(item);
    if (index === -1) return;
    return array.splice(index, 1);
  }

};
