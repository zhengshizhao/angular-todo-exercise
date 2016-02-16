// This file should contain all the record creation needed to seed the database with its default values.
// The data can then be loaded with the node seed.js

var Promise = require('bluebird');
var mongoose = require('mongoose');
var models = require('./models');

var data = {
  Activity: [
    {name: "Mahayana Temple Buddhist Association", age_range: "All" },
    {name: "South Street Seaport", age_range: "All" },
    {name: "Ground Zero", age_range: "All" },
    {name: "National September 11th Memorial & Museum", age_range: "All" },
    {name: "Battery Park", age_range: "All" },
    {name: "Staten Island Ferry Whitehall Terminal", age_range: "All" },
    {name: "Chinatown Ice Cream Factory", age_range: "All" },
    {name: "Blue Man Group", age_range: "All" },
    {name: "Scott's Pizza Tours", age_range: "All" },
    {name: "Apple Store", age_range: "All" },
    {name: "Brooklyn Bridge Park", age_range: "All" },
    {name: "Ellis Island Immigration Museum", age_range: "All" },
    {name: "Washington Square Park", age_range: "All" },
    {name: "Union Square Holiday Market", age_range: "All" },
    {name: "Strand Bookstore", age_range: "All" }
  ]
};

mongoose.connection.on('open', function() {
  mongoose.connection.db.dropDatabase(function() {

    console.log("Dropped old data, now inserting data");
    Promise.map(Object.keys(data), function(modelName) {
      return Promise.map(data[modelName], function(item) {
        return models[modelName].create(item);
      });
    }).then(function() {
      console.log("Finished inserting data");
    }, console.log).then(function() {
      mongoose.connection.close()
    });

  });
});