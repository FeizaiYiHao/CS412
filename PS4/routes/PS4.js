const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const API = require('../API')

/* GET home page. */
/*router.get('/', async function(req, res, next) {
    let value = await fetch(API.Base + "?" + "key=" + API.Key + "&from=" + "Irvine" + "&to=" + "Boston");
    let result = await value.json();
    res.render('PS4', { from: result.route.locations[0].adminArea4, to:  result.route.locations[1].adminArea4 , dis: result.route.distance});
});*/

router.post('/', async function(req, res, next) {
    let value = await fetch(API.Base + "?" + "key=" + API.Key + "&from=" + req.body.from + "&to=" + req.body.to);
    let result = await value.json();
    res.render('PS4', { from: result.route.locations[0].adminArea4, to:  result.route.locations[1].adminArea4 , dis: result.route.distance});
});
module.exports = router;
