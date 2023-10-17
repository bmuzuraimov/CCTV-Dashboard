var express = require('express');
var router = express.Router();

const { connectToDB, ObjectId } = require('../utils/db');

router.get('/', function (req, res) {
  res.render('index', {});
});

router.get('/camera', function (req, res) {
  res.render('camera', {});
});

router.get('/history', function (req, res) {
  res.render('history', {});
});

router.get('/login', function (req, res) {
  res.render('login', {});
});

module.exports = router;