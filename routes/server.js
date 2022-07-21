var express = require('express');
var fs = require('fs');
var router = express.Router();

/* POST */
router.post('/csv2server', function(req, res, next) {
  const data = req.body.data;
  console.log("On!")
  fs.writeFileSync('csv_data.csv', data);
});

module.exports = router;
