/**
 * Created by thomasmichelet on 23/11/15.
 */
var express = require('express');

var app = express();

app.get('/', function(req, res){
    res.send('Bonjour depuis le container!');
});

app.listen(8080);