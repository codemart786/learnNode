const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017/';

MongoClient.connect(url ,(err ,db) => {
    assert.equal(err ,null);
    console.log('Connected to server');
    var dbo = db.db('conFusion');
    const collection = dbo.collection("dishes");
    collection.insertOne({"name" : "Paul" ,"description" : "test_2"} ,
        (err ,result) => {
            assert.equal(err ,null);
            console.log("After Insert\n");
            console.log(result.ops);

            collection.find({}).toArray((err ,docs) => {
                assert.equal(err ,null);
                console.log('Found:\n');
                console.log(docs);

                dbo.dropCollection('dishes' ,(err ,result) => {
                    assert.equal(err ,null);
                    db.close();
                });
            });
        });
});