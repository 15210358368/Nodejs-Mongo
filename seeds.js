const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })


const seed = [
    {
        name: 'Potato',
        price: 7.99,
        category: 'vegetable'
    },
    {
        name: 'Milk',
        price: 2.99,
        category: 'dairy'
    },
    {
        name: 'Brocoli',
        price: 9.99,
        category: 'vegetable'
    }
]

Product.insertMany(seed);