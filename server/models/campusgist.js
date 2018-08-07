const mongoose = require('mongoose')
const campusTable = new mongoose.Schema({
    title:String,
    content:String,
    school:String,
    time:{type:Date, default:Date.now()},
    picture:String
})
module.exports = mongoose.model('campusgist', campusTable)