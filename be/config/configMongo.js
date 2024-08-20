const mongoose = require('mongoose');

const connectMongo =  async() => {
    mongoose.connect('mongodb://127.0.0.1:27017/Facebook')
    .then(() => console.log('Connect Mongodb success!'));
}  


module.exports = connectMongo