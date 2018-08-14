const mongoose = require('mongoose')
const mongodbErrorHandler = require('mongoose-mongodb-errors')

const adminSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    phone:Number,
    picture:String
})
adminSchema.plugin(mongodbErrorHandler)
module.exports = mongoose.model('admin', adminSchema)