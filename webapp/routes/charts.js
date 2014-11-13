var express = require('express');
var router  = express.Router();
var domain  = require('../../domain');

var chartsController = require('../controllers/charts');

router.use(function(req, res, next) {
    domain(function(err, db) {
        if (err) {
            next(err);
        }
        req.db = db;
        req.domain = domain;
        next();
    });
});

/* GET charts listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

router.get('/allTransactions', chartsController.allTransactions);

module.exports = router;
