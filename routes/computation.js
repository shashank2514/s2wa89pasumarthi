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

let log = Math.log2(x) 
let cosh = Math.cosh(x)
let floo = Math.floor(x) 

res.render('computation', {
  title: 'Computation of Math functions',
  values: `Math.log2(),Math.cosh(),Math.floor() are applied to ` + x + ` is ` + log + `,` + cosh + `,` + floo 
});
});

module.exports = router;