var express = require('express');
var app = express();
var mysql = require('mysql');
var dot = require('dot');

app.set('view engine', 'ejs');

var connection = mysql.createConnection({
	host	: 'localhost',
	user	: 'root',
	database: 'mass_claims'
});


app.get('/', function(req,res){
	var q = "SELECT COUNT(*) AS count FROM silicosisData";
	connection.query(q, function(err,results){
		if(err) throw err;
		var count = results[0].count;
		//res.send("We have " + count + " people in our database");
		//res.send("Online Mass Claims");
		res.render("landing", {data: count});
	});
	
});

app.get('/output', function(req,res){
	res.render("output");
});


app.listen(3000, function(){
	console.log('app is connected');
});

