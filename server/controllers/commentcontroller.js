const bodyParser = require('body-parser')
const Comment = require('../models/comment')

exports.createComment = async (req, res) => {
    const body = req.body
    if(!body.name || !body.comment){
        res.status(422).json({message:`All fields are require`})
    }
    else {
        const info = await Comment.create(req.params.id,{
            
            name:req.body.name,
            comment:req.body.comment
        })
    }
}