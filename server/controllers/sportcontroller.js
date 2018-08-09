const bodyParser = require('body-parser')
const sport = require('../models/sport')

//create new sport news
exports.createSportNews = async (req, res) => {
    const body = req.body
    if(!body.title || !body.content){
        res.status(403).json({
            message:`please ensure all fields are filled`
        })
    }
    else{
        const info = await sport.create(body)
        res.status(200).json({
            info:info
        })
    }
}
//get all post
exports.getAllSportNews = async (req, res) => {
    const info = await sport.find().sort({'_id':-1})
    res.status(200).json({
        info:info
    })
}
//get single post
exports.getSingleSportNews = async (req, res) => {
    const info = await sport.findById(req.params.id)
    res.status(200).json({
        info:info
    })
}
//update post
exports.updateSportNews = async (req, res) => {
    const info = await sport.findByIdAndUpdate(req.params.id, req.body, {new:true})
    res.status(200).json({info:info})
}
//delete post
exports.deleteSportNews = async (req, res) => {
    const info = await sport.findByIdAndRemove(req.params.id)
    res.status(200).json({info:info})
}