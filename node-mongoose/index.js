const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const Dishes = require('./models/dishes');
const url = 'mongodb://localhost:27017/conFusion';

const connect = mongoose.connect(url);
connect.then((db) => {
    console.log('Connected correctly to server');
    Dishes.create({
        name: "Rishabh786786",
        description: "test mongoose"
    })
        .then((dish) => {
            console.log(dish);
            return Dishes.findByIdAndUpdate(dish._id, {
                $set: { description: 'Updated Test' }
            }, {
                    new: true
                }).exec();
        })
        .then((dish) => {
            console.log(dish);
            dish.comments.push({
                rating:5 ,
                comment:'T T T',
                author:'Rishabh'
            });
            return dish.save();
        }).then((dish) => {
            console.log(dish);
            return Dishes.collection.drop();   //to drop a collection in mongoose
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