const bodyParser = require('body-parser')
const post = require('../models/post')

// create post
exports.createNewPost = async (req, res) => {
    const body = req.body
    //let time = new Date();
    if(!body.title || !body.content){
        res.status(400).json({message:`Please ensure all fields are filled`})  
    }
    else {
        const Post = await post.create({
            title:body.title,
            content:body.content,
            time:body.time,
            author:body.author,
            comment:body.comment
        })
        res.status(200).json({
            message:`post created successfully`,
            post:Post
        })
    }
}
// get all posts 
exports.getAllPost = async (req, res) => {
    const allPost = await post.find().sort({'_id':-1})
    res.status(200).json({
        posts:allPost
    })
}
// get a single post
exports.getSinglePost = async (req, res) => {
    const singlePost = await post.findById(req.params.id)
    res.status(200).json({
        single:singlePost
    })
}
// Update a post
exports.updatePost = (req, res) => {
    post.findByIdAndUpdate(req.body.id, req.body, {new:true}, (err, post) => {
        if(err) {
            res.status(500).json({
                message:`An error occur updating post`
            })
        }
        else {
            res.status(200).json({
                message:`Updated`,
                post:post
            })
        }
    })
}
// delete a post
exports.deletePost = (req, res) => {
    post.findByIdAndRemove(req.params.id, (err, post) => {
        if(err){
            res.status(500).json({
                message:`Error: Unable to delete post`
            })
        }
        else{
            res.status(200).json({
                message:`Deleted`
            })
        }
    })
}
//comments
exports.createComment = async(req, res) => {
    const info = await post.create(req.params.id,{
        comment:[
            {
                name:req.body.name,
                comment:req.body.comment
            }
        ]
    })
}