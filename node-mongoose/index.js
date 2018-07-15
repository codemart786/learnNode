const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const Dishes = require('./models/dishes');
const url ='mongodb://localhost:27017/conFusion';

const connect = mongoose.connect(url);
connect.then((db) => {
    console.log('Connected correctly to server');
    var newDish = Dishes({
        name : "Rishabh786786" ,
        description : "test mongoose"
    });
    newDish.save()
    .then((dish) => {
        console.log(dish);
        return Dishes.find({}).exec();
    })
    .then((dishes) => {
        console.log(dishes);
        return newDish.collection.drop();   //to drop a collection in mongoose
    })
    .then(() => {
        return mongoose.connection.close(); //to close a database connection in mongoose 
    })
    .then(() => {
        console.log('DB connection successfully closed');
    })
    .catch((err) => {
        console.log(err);
    });
}).catch((err) => {
    console.log(err); 
});