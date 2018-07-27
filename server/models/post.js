const mongoose = require('mongoose')
const postSchema = new mongoose.Schema({
    title:String,
    content:String,
    time:Date,
    author:{type:String, ref:'admin'}
})
module.exports = mongoose.model('post', postSchema)