const mongoose = require('mongoose')

const Test = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    phone:Number
})
module.exports = mongoose.model('test', Test)