/**
 * Created by thomasmichelet on 23/11/15.
 */
var express = require('express');

var app = express();

app.get('/', function(req, res){
    res.send('Bonjour depuis le container!');
});

app.get('/name/:name', function(req, res){
    res.send('Bonjour + ' req.params.name + ', vous etes dans le container!');    
});

app.get('/version', function(req, res) {
   res.send('Version 1.0'); 
});
app.listen(8080);