const mongoose = require('mongoose')
const mongodbErrorHandler = require('mongoose-mongodb-errors')

const techSchema = new mongoose.Schema({
    title:{type:String, trim:true},
    content:String,
    author:{type:String},
    picture:String,
    comments:[
        {
            name:String,
            comment:String
        }
    ]
})
techSchema.plugin(mongodbErrorHandler)
module.exports = mongoose.model('tech', techSchema)