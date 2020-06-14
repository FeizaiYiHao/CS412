const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const API = require('../API')

/* GET home page. */
router.get('/', async function(req, res, next) {
    let value = await fetch(API.Base + '?' + "q=" + "Irvine" +"&appid=" + API.Key);
    let result = await value.json();
    res.render('PS4', { city: result.name, weather: result.weather[0].main, temp:result.main.temp});
});

router.post('/', async function(req, res, next) {
    let value = await fetch(API.Base + '?' + "q=" + req.body.city +"&appid=" + API.Key);
    let result = await value.json();
    res.render('PS4', { city: result.name, weather: result.weather[0].main, temp:result.main.temp});
});
module.exports = router;
