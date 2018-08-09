const mongoose = require('mongoose')
const sportTable = new mongoose.Schema({
    title:String,
    content:String,
    date:{type:Date, default:Date.now()},
    picture:String
})
module.exports = mongoose.model('sport', sportTable)