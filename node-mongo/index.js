const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const dbOper = require('./operations');

const url = 'mongodb://localhost:27017/';

MongoClient.connect(url).then( (db) => {
    console.log('Connected to server');
    dbOper.insertDocument(db.db('conFusion') ,{name : "Rajat" ,description : "mytest"} ,'dishes')
    .then((result) => {
        console.log("Inserted document\n" ,result.ops);
        return dbOper.findDocuments(db.db('conFusion') ,'dishes');
    })
    .then((docs) => {
        console.log('Found document ',docs);
        return dbOper.updateDocument(db.db('conFusion') ,{name : "Rajat"} ,{description : "Updated test"} ,'dishes');
    })
    .then((result) => {    
        console.log('Updated document\n' ,result.result);
        return dbOper.findDocuments(db.db('conFusion') ,'dishes');
    })   
    .then((docs) => {                
            console.log('Found updated documents ',docs);
            return db.db('conFusion').dropCollection('dishes');
    })        
    .then((result) => {
                        console.log("Dropped Collection " ,result);
                        db.close();
    }).catch((err) => console.log(err));    
} ,(err) => {
    console.log(err);
}).catch((err) => console.log(err));