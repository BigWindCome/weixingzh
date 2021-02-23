var express = require('express');
var router = express.Router();
var UserModel = require('../models/UserModel')

/* GET home page. */
router.get('/xhfjl', function(req, res, next) {
  res.render('xhfjl/index', { title: 'xhfs' });
});

module.exports = router;
