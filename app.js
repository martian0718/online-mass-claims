var express = require('express');
var app = express();
var mysql = require('mysql');
var dot = require('dot');


app.set('view engine', 'ejs');

var connection = mysql.createConnection({
	host	: 'localhost',
	user	: 'root',
	database: 'mass_claims'//name of the database that I made that you may have to change depending on your database name
});

var count; //to be used to show number of data
var x; //still working on getting this value to be changed by using the form HTML
var y;
var z;
var amt;

app.get('/', function(req,res){
	var q = "SELECT COUNT(*) AS count FROM silicosisData1";
	connection.query(q, function(err,results){
		if(err) throw err;
		count = results[0].count;
		x = 0;
		res.render("landing", {data: count, x: x, y: y, z: z, amt: amt}); //renders the landing page 
		
	});
	
});

app.get('/output', function(req,res){
	var q = "SELECT * FROM silicosisData1";
	connection.query(q, function(err,results){
		if(err) throw err;
		var data = results;
		res.render("output", {dataset: data}); //currently just outputs the data in the table 
	});
	
});

//this is to submit the form 
//want to render the sql statement from the post here
app.post('/', function(req,res){
	var sqlStatement = "";
	console.log(x); //keeps printing undefined I need to find a way to make it actual value desired
	res.render("landing", {data: count, x: x, y: y, z: z, amt: amt});
});


app.listen(3000, function(){
	console.log('app is connected');
});

