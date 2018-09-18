const mongoose = require('mongoose')
const mongodbErrorHandler = require('mongoose-mongodb-errors')

const postSchema = new mongoose.Schema({
    title:String,
    content:String,
    author:{type:String},
    picture:String,
    comments:[
        {
            text:{type:String},
            created:{type:Date, default:Date.now()},
            comment_by:{type:String, default:'anonymous'}
        }
    ]
},{
    timestamps: true
  })
postSchema.plugin(mongodbErrorHandler)
module.exports = mongoose.model('post', postSchema)
const post = module.exports = mongoose.model('post', postSchema)

module.exports.addComment = function(query, comment, callback){
    post.update(query, {
        $push:{
            comments: comment
        }
    }, callback)

}