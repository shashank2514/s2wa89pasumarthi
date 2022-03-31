var express = require('express');
var router = express.Router();


/* GET computation page. */
router.get('/', function(req, res, next) {
var random = Math.random();
var x;
x = req.query.x;

if (x == undefined) {
  x = random;
}

let fround = Math.fround(x) 
let random1 = Math.random(x)
let round = Math.round(x) 

res.render('computation', {
  title: 'Computation of Math functions',
  values: `Math.fround(),Math.random(),Math.round() are applied to ` + x + ` is ` + fround + `,` + random1 + `,` + round 
});
});

module.exports = router;