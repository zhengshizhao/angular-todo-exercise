var express = require('express');
var router = express.Router();
var models = require('../models');
var ListItem = models.ListItem;
var Promise = require('bluebird');

router.get('/listItems', function (req, res, next) {
  ListItem.find({})
  .then(function (allListItems) {
    res.json(allListItems);
  }).then(null, next);
});

router.post('/listItems', function (req, res, next) {
  ListItem.create(req.body)
  .then(function (newItem) {
    res.json(newItem);
  }).then(null, next);
});

router.put('/listItems/:itemId', function (req, res, next) {
  ListItem.findById(req.params.itemId)
  .then(function (foundItem) {
    foundItem.complete = req.body.complete;
    return foundItem.save()
  }).then(function (savedItem) {
    res.json(savedItem);
  }).then(null, next);
});

router.delete('/listItems/:itemId', function (req, res, next) {
  console.log(req.params.itemId);
  ListItem.findByIdAndRemove(req.params.itemId)
  .then(function () {
    res.sendStatus(200);
  }).then(null, next);
})


module.exports = router;
