var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

exports.firstFunction = function (FirstName, LastName)
{
    console.log("test")
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("test");
        var query = { FirstName: `${FirstName}`, LastName:`${LastName}`  };
        dbo.collection("WESWEB").find(query).toArray(function (err, result) {
            if (err) throw err;
            console.log("DEBUG")
            console.log(result);
            if (result.length!=0) {
                console.log("Person allready in db");
                db.close();
            } else {
                var myobj = { FirstName: `${FirstName}`, LastName: `${LastName}` };
                dbo.collection("WESWEB").insertOne(myobj, function (err, res) {
                    if (err) throw err;
                    console.log("1 document inserted");
                    db.close();
                });
            }
        });
    });
};