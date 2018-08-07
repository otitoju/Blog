const mongoose = require('mongoose')
const adminSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    phone:Number,
    picture:String
})
module.exports = mongoose.model('admin', adminSchema)