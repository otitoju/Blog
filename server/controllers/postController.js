const post = require('../models/post')
const comment = require('../models/comment')
// create post
exports.createNewPost = async (req, res) => {
    const body = req.body
    if(!body.title || !body.content){
        res.status(400).json({message:`Please ensure all fields are filled`})  
    }
    else {
        const Post = await post.create({
            title:body.title,
            content:body.content,
            author:body.author,
            comment:body.comment
        })
        res.status(200).json({
            message:`post created successfully`,
            post:Post
        })
    }
}
// get all posts s
exports.getAllPost = async (req, res) => {
    const allPost = await post.find().sort({'_id':-1})
    res.status(200).json({
        posts:allPost
    })
}
// get a single post
exports.getSinglePost = async (req, res) => {
    const singlePost = await post.findById(req.params.id)
    if(!singlePost){
        res.status(422).json({message:`post not found`})
    }
    res.status(200).json({
        single:singlePost
    })
}
// Update a post
exports.updatePost = async (req, res) => {
    const info = await post.findOne({_id: req.params.id})
    if(!info){
        res.status(403).json({message:`Post not found`})
    }
    else{
        info.title = req.body.title || info.title
        info.content = req.body.content || info.content
        await info.save()
        res.json({message:'Post successfully updated'})
    }

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
// exports.createComment = async(req, res) => {
//     const body = req.body
//     const info = await post.findOne({_id:req.params.id})
//     if(!info){
//         res.json({message:`Error:not found`})
//     }
//     else{
//         const result = await comment.create(body)
//         const com = info.comments
//         com.push(result)
//         await info.save()
//         res.json({
//             message:`successfully added comment `,
//             info:result
//         })

//     }
    
// }
exports.findComments = async (req, res) => {
    const info = await comment.findById(req.params.id)
    res.json(info)
}


exports.editPostById = async (req, res) => {
    const { content, title } = req.body
    const info = await post.findOne({ _id: req.params.id })
    if(!info){
      res.json({
        message: 'Post not found!',
        success: false
      })
    }
    info.title = title || info.title
    info.content = content || info.content
    await info.save()
    res.json({
      message: 'Post updated successfully',
      success: false,
      info:info
    })
  }

exports.createComment = (req, res) => {
    if(!req.body.text){
        res.status(403).json({
            message:'No empty field allowed'
        })
    }
    else{
        let article = new post()
        let query = {_id:req.params.id}
        let comment = {
            text:req.body.text
        }
        post.addComment(query, comment, (err, article) => {
            res.json({message:'successfully added comment'})
        })
    }
}
 