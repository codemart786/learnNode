const assert = require('assert');
exports.insertDocument = (db ,document ,collection ,callback) => {
    const coll = db.collection(collection);
    coll.insert(document ,(err ,result) => {
        assert.equal(null ,err);
        console.log("Inserted " + result.result.n);
        callback(result);
    });
};

exports.findDocuments = (db ,collection ,callback) => {
    const coll = db.collection(collection);
    coll.find({}).toArray((err ,result) => {
        assert.equal(null ,err);
        callback(result);
    });
};

exports.removeDocument = (db ,document ,collection ,callback) => {
    const coll = db.collection(collection);
    coll.deleteOne(document ,(err ,result) => {
        assert.equal(err ,null);
        console.log("Remove the document " ,document);
        callback(result);
    });
};
exports.updateDocument = (db ,document ,update ,collection ,callback) => {
    const coll = db.collection(collection);
    coll.updateOne(document ,{$set : update} ,null ,(err ,result) => {
        assert.equal(err ,null);
        console.log("Updated the document\n");
        callback(result);
    });
};
