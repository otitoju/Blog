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
    post.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, info) => {
        if(err) {
            res.status(500).json({
                message:`An error occur updating post`
            })
        }
        else {
            res.status(200).json({
                message:`Updated`,
                post:info
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
    const info = await post.findOne({_id:req.params.id})
    if(!info){
        res.json({message:`Error:not found`})
    }
    else{
       const result = await post.create({
            name:req.body.name,
            comment:req.body.comment
        })
        res.json({
            info:result
        })
    }
    
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

  exports.catchErrors = fn => {
    return function (req, res, next) {
      return fn(req, res, next).catch(next)
    }
  }
  
  exports.developmentErrors = (err, req, res, next) => {
    err.stack = err.stack || ''
    const errorDetails = {
      message: err.message,
      status: err.status,
      stackHighlighted: err.stack.replace(
        /[a-z_-\d]+.js:\d+:\d+/gi,
        '<mark>$&</mark>'
      )
    }
    res.status(err.status || 500)
    res.format({
      // Based on the `Accept` http header
      'text/html': () => {
        res.json(errorDetails)
      }, // Form Submit, Reload the page
      'application/json': () => res.json(errorDetails) // Ajax call, send JSON back
    })
  }
  
  exports.productionErrors = (err, req, res, next) => {
    res.status(err.status || 500)
    res.json({
      message: err.message,
      error: {}
    })
  }