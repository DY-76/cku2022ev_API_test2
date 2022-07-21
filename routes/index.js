var express = require('express');
const fs = require("fs");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express'});
});

/* map popup */
router.post('/map', function(req, res, next) {
  res.render('map', { title: 'Express'});
});

module.exports = router;
