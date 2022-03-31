var express = require('express');
var router = express.Router();

/* GET mydata page. */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Shashank Pasumarthi',fact: 'I am a foodie' });
});

module.exports = router;
