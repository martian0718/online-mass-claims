var express = require('express');
var app = express();

app.get('/', function(req,res){
	res.send("Online Mass Claims");
});

app.get('/output' function(req,res){
	res.send("output will be here");
});

app.listen(3000, function(){
	console.log('app is connected');
});
