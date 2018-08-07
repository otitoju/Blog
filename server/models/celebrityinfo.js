const mongoose = require('mongoose')
const celebrityTable = new mongoose.Schema({
    fullname:String,
    stagename:String,
    dob:Date,
    age:Number,
    company:String,
    backgroundinfo:String,
    yearstarted:Date,
    picture:String
})
module.exports = mongoose.model('celebrity', celebrityTable)