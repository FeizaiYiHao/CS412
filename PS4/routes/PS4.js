const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const API = require('../configs/API');

const redis = require("redis")
const client = redis.createClient();
client.flushdb((err, success) => {
    if (err) { throw new Error(err)}
});



/* GET home page. */
/*router.get('/', async function(req, res, next) {
    let value = await fetch(API.Base + "?" + "key=" + API.Key + "&from=" + "Irvine" + "&to=" + "Boston");
    let result = await value.json();
    res.render('PS4', { from: result.route.locations[0].adminArea4, to:  result.route.locations[1].adminArea4 , dis: result.route.distance});
});*/

router.post('/', async function(req, res, next) {
    let key =  'from' + req.body.from + "to" + req.body.to;
    client.exists(key,async (err,response)=>{
        if(err){ throw new Error(err)}
        if(response == 1){
            client.get(key,(err,response)=>{
                res.send(response);
            })
        }
        else{
            let value = await fetch(API.Base + "?" + "key=" + API.Key + "&from=" + req.body.from + "&to=" + req.body.to);
            res.send(JSON.stringify(value + "NOT CACHED"))
            client.set(key,JSON.stringify(value + "CACHED"),(err)=>{
                client.expire(key,30);
            });
        }
    })
});
module.exports = router;
