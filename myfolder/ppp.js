var express = require('express');  
var app = express();  

app.get('/get_pgm2', function (req, res) {  
    res.send('<p>Username: ' + req.query['first_name']+'</p><p>Lastname: '+req.query['last_name']+'</p>');  
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("testconnection");
      //var myobj={rno:6,name:"chitra",mark:68};
     // var myobj=response;
      dbo.collection("testtable").insertOne({fistname:req.query['first_name'],lastname:req.query['last_name']}, function(err, res) {
        if (err) throw err;
        console.log("successfully inserted");
        db.close();
      });
    });
    })  


/*
var express = require('express');  
var app = express();  
app.get('/', function (req, res) {  
   res.send('Welcome to gowthaman');  
})*/  
var server = app.listen(8000, function () {  
var host = server.address().address  
  var port = server.address().port  
 console.log("Example app listening at http://%s:%s", host, port)  
})  