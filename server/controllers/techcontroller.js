const tech = require('../models/tech')

//new post
exports.newTechPost = async (req, res) => {
    const body = req.body
    if(!body.title || !body.content){
        res.status(403).json({message:`All fields are required`})
    }
    else{
        const info = await tech.create(body)
        res.status(200).json({
            message:`Post created`,
            info:info
        })
    }
}
//find all post
exports.findAllTech = async (req, res) => {
    const info = await tech.find().sort({'_id':-1})
    res.json({message:info})
}
//find a single tech post
exports.findSingleTech = async (req, res) => {
    const info = await tech.findById(req.params.id)
    res.json({message:info})
}
//update post
exports.updateTechPost = async (req, res) => {
    const info = await tech.findOne({_id:req.params.id})
    if(!info){
        res.status(404).json({
            message:'tech post not found'
        })
    }
    else{
        info.title = req.body.title || info.title
        info.content = req.body.content || info.content
        await info.save()
        res.status(200).json({
            message:'post successfully upated',
            info:info
        })
    }
}
//delete post
exports.deleteTechPost = async (req, res) => {
    const info = await tech.findByIdAndRemove(req.params.id)
    res.status(200).json({message:`post successfully deleted`})
}