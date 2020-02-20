var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

exports.firstFunction = function (Username, Password)
{
    console.log("test")
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("test");
        var query = { Username: `${Username}`, Password:`${Password}`  };
        dbo.collection("WESWEB").find(query).toArray(function (err, result) {
            if (err) throw err;
            console.log("DEBUG")
            console.log(result);
            if (result.length!=0) {
                console.log("Person allready in db");
                db.close();
            } else {
                var myobj = { Username: `${Username}`, Password: `${Password}` };
                dbo.collection("WESWEB").insertOne(myobj, function (err, res) {
                    if (err) throw err;
                    console.log("1 document inserted");
                    db.close();
                });
            }
        });
    });
};

exports.regFunction = function (url)
{
    console.log("note")
    location.href("indexreg.html")
};