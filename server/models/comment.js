const mongoose = require('mongoose')
const commentSchema = new mongoose.Schema({
    // _id:mongoose.Schema.Types.ObjectId,
    // time:{type:Date, default:Date.now()},
    comment:String,
    name:String
})
module.exports = mongoose.model('comment', commentSchema)