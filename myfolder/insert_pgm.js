var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("employee");
  var myobj={eno:1003,ename:"chitra",sal:23468};
 
  dbo.collection("detail").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("successfully inserted");
    db.close();
  });
});
