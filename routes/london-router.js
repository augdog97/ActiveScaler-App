var express = require('express');
var router = express.Router();
var path = require('path');


/* GET home page. */
router.get('/london', function (req, res, next) {
    res.render('london');
})


module.exports = router;
