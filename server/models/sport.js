const mongoose = require('mongoose')
const mongodbErrorHandler = require('mongoose-mongodb-errors')

const sportTable = new mongoose.Schema({
    title:String,
    content:String,
    picture:String
},
{
    timestamps:true
})
sportTable.plugin(mongodbErrorHandler)
module.exports = mongoose.model('sport', sportTable)