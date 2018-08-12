const mongoose = require('mongoose')
const postSchema = new mongoose.Schema({
    title:String,
    content:String,
    time:{type:Date, default:new Date(), timestamp: true},
    author:{type:String},
    picture:String,
    comments:[
        {
            name:String,
            comment:String
        }
    ]
})
module.exports = mongoose.model('post', postSchema)
