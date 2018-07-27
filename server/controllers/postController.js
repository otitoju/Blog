const bodyParser = require('body-parser')
const post = require('../models/post')

// create post
exports.createNewPost = async (req, res) => {
    const body = req.body
    if(!body.title || !body.content || !body.author){
        res.status(400).json({message:`Please ensure all fields are filled`})  
    }
    else {
        const Post = await post.create({
            title:body.title,
            content:body.content,
            time:body.time,
            author:body.author
        })
        res.status(200).json({
            message:`post created successfully`,
            post:Post
        })
    }
}