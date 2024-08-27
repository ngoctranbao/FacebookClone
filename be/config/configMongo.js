const mongoose = require('mongoose');
require("dotenv").config()

const url = process.env.MONGODB_URL

const connectMongo =  async() => {
    try {
        mongoose.connect(url)
        .then(() => console.log('Connect Mongodb success!'));        
    } catch (error) {
        console.log(`Connect Mongodb fail: ${error}`)
    }

}  

module.exports = connectMongo