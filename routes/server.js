var express = require('express');
var fs = require('fs');
var router = express.Router();

/* POST-CSV Download */
router.post('/csv2server', function(req, res, next) {
  const data = req.body.data;
  console.log("On!")
  fs.writeFileSync('csv_data.csv', data);
});

/* TEST */
router.post('/testPost', function(req, res, next) {
  const data = req.body.data;
  console.log("testPost_Success!")
  res.send({result:"testPost_Success!"});
});
router.get('/testGet', function(req, res, next) {
  const data = req.body.data;
  console.log("testGet_Success!")
  res.send({result:"testGet_Success!"});
});

module.exports = router;
