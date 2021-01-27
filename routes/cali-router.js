var express = require('express');
var router = express.Router();
var path = require('path');


/* GET home page. */
router.get('/california', function (req, res, next) {
    res.render('california');
})


module.exports = router;
