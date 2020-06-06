var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    //res.send({string: "Hey now"});
    res.render('template', {string: "Hey now"})
});
router.post('/', function(req, res, next) {
    res.render('template', {string: "Hey now",len: 7})
});
module.exports = router;