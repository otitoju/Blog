const mongoose = require('mongoose')
const mongodbErrorHandler = require('mongoose-mongodb-errors')

const campusTable = new mongoose.Schema({
    title:String,
    content:String,
    school:String,
    picture:String
},
{
    timestamps:true
})
campusTable.plugin(mongodbErrorHandler)
module.exports = mongoose.model('campusgist', campusTable)