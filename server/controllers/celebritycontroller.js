const bodyParser = require('body-parser')
const celebrity = require('../models/celebrityinfo')

//create new celebrity information
exports.createNewCelebrityInfo = async (req, res) => {
    const body = req.body
    if(!body.fullname || !body.stagename || !body.company || !body.dob || !body.age || !body.backgroundinfo || !body.yearstarted){
        res.status(403).json({
            message:`Please ensure all fields are properly filled`
        })
    }
    else {
        const newInfo = await celebrity.create(body)
        res.status(200).json({
            message:'created',
            info:newInfo
        })
    }
}
//get all celebrity post
exports.getAllCelebrityPost = async (req, res) => {
    const info = await celebrity.find().sort({'_id':-1})
    res.status(200).json({
        info:info
    })
}
// get single post
exports.getSinglePost = async (req, res) => {
    const single = await celebrity.findById(req.params.id)
    res.status(200).json({
        info:single
    })
}
//update celebrity info
exports.updateCelebrityGist = async (req, res) => {
    const info = await celebrity.findByIdAndUpdate(req.params.id, req.body, {new:true})
    res.status(200).json({
        info:info
    })
}
//delete celebrity info
exports.deleteCelebrityGist = async (req, res) => {
    const info = await celebrity.findByIdAndRemove(req.params.id)
    res.status(200).json({
        info:info
    })
}