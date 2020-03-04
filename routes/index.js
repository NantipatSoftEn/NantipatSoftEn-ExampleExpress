var express = require('express');
var router = express.Router();


const  WikiController = require('../controllers/WikiController');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/wiki', WikiController.aboutMe);

module.exports = router;
