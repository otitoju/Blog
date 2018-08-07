const mongoose = require('mongoose')
const postSchema = new mongoose.Schema({
    title:String,
    content:String,
    time:{type:Date, default:Date.now()},
    author:{type:String},
    picture:String,
    comments:[
        {
            type:mongoose.Schema.Types.ObjectId,ref:'comment'
        }
    ]
})
module.exports = mongoose.model('post', postSchema)