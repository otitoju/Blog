const mongoose = require('mongoose')
const mongodbErrorHandler = require('mongoose-mongodb-errors')

const celebrityTable = new mongoose.Schema({
    fullname:String,
    stagename:String,
    dob:Date,
    age:Number,
    company:String,
    backgroundinfo:String,
    yearstarted:String,
    picture:String,
},
{
    timestamps:true
})
celebrityTable.plugin(mongodbErrorHandler)
module.exports = mongoose.model('celebrity', celebrityTable)