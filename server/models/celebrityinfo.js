const mongoose = require('mongoose')
const celebrityTable = new mongoose.Schema({
    fullname:String,
    stagename:String,
    dob:Date,
    age:Number,
    company:String,
    backgroundinfo:String,
    yearstarted:String,
    picture:String,
    date:{type:Date, default:Date.now()}
})
module.exports = mongoose.model('celebrity', celebrityTable)