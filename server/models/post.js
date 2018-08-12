const mongoose = require('mongoose')
import mongodbErrorHandler from 'mongoose-mongodb-errors'
const postSchema = new mongoose.Schema({
    title:String,
    content:String,
    author:{type:String},
    picture:String,
    comments:[
        {
            name:String,
            comment:String
        }
    ]
},{
    timestamps: true
  })
  postSchema.plugin(mongodbErrorHandler)
module.exports = mongoose.model('post', postSchema)