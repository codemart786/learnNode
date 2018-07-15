const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const dbOper = require('./operations');

const url = 'mongodb://localhost:27017/';

MongoClient.connect(url ,(err ,db) => {
    assert.equal(err ,null);
    console.log('Connected to server');
    dbOper.insertDocument(db.db('conFusion') ,{name : "Rajat" ,description : "mytest"} ,'dishes' ,(result) => {
        console.log("Inserted document\n" ,result.ops);
        dbOper.findDocuments(db.db('conFusion') ,'dishes' ,(docs) => {
            console.log('Found document ',docs);
            dbOper.updateDocument(db.db('conFusion') ,{name : "Rajat"} ,{description : "Updated test"} ,'dishes' ,(result) => {
                console.log('Updated document\n' ,result.result);
                dbOper.findDocuments(db.db('conFusion') ,'dishes' ,(docs) => {
                    console.log('Found updated documents ',docs);
                    db.db('conFusion').dropCollection('dishes' ,(result) => {
                        console.log("Dropped Collection " ,result);
                        db.close();
                    });
                });        
            });
        });
    });
});