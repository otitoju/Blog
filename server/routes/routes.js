const express = require('express')
const router = express.Router()
const postcontroller = require('../controllers/postController')
const test = require('../controllers/testcontroller')
const admin = require('../controllers/admincontroller')
const campuscontroller = require('../controllers/campuscontroller')
const celebritycontroller = require('../controllers/celebritycontroller')
const sportcontroller = require('../controllers/sportcontroller')
const contact = require('../controllers/contactUs')
const commentcontroller = require('../controllers/commentcontroller')

const multer = require('multer')
const cloudinary = require('cloudinary')

//post routes
router.post('/post', postcontroller.createNewPost)
router.get('/getposts', postcontroller.getAllPost)
router.get('/singlepost/:id', postcontroller.getSinglePost)
router.put('/updatepost/:id', postcontroller.updatePost)
router.delete('deletepost/:id', postcontroller.deletePost)
router.put('/edit/:id', postcontroller.editPostById)
router.post('/comments/:id', postcontroller.createComment)


//admin routes
router.post('/reg', admin.registerUser)
router.post('/signin', admin.loginUser)
router.get('/get', admin.getAllAdmin)
router.get('/get/:id', admin.getSingleUser)
router.put('/update/:id', admin.updateUser)
router.delete('/delete/:id', admin.deleteUser)

//campus routes
router.post('/postcampus', campuscontroller.createNewCampusGist)
router.get('/getcampusgist', campuscontroller.getAllCampusGist)
router.get('/getcampusgist/:id', campuscontroller.getSingleCampusGist)
router.delete('/deletegist/:id', campuscontroller.deleteCampusGist)
router.put('/updategist/:id', campuscontroller.updateCampusGist)

//celebrity routes
router.post('/celebritypost', celebritycontroller.createNewCelebrityInfo)
router.get('/getcelebritypost', celebritycontroller.getAllCelebrityPost)
router.get('/getcelebritypost/:id', celebritycontroller.getSinglePost)
router.put('updatecelebritypost/:id', celebritycontroller.updateCelebrityGist)
router.delete('/deletecelebritypost/:id', celebritycontroller.deleteCelebrityGist)

//sport routes
router.post('/sportpost', sportcontroller.createSportNews)
router.get('/getsportnews', sportcontroller.getAllSportNews)
router.get('/getsportnews/:id', sportcontroller.getSingleSportNews)
router.put('/updatesport/:id', sportcontroller.updateSportNews)
router.delete('/deletesport/:id', sportcontroller.deleteSportNews)

//contact us routes
router.post('/contactus', contact.contactUs)
//comment routes
router.post('/comment', commentcontroller.createComment)

//test
router.post('/test', test.test)


const storage = multer.diskStorage({
    filename:function(req, file, cb){
        cb(null, Date.now()+file.originalname)
    }
})
const imageFilter = function(req, file, cb){
    if(!file.originalname.match(/\.(jpeg|jpg|png)$/i)){
        return cb(new Error('Only image files are allowed'), false)
    }
    else{
        cb(null,true)
    }
}
var upload = multer({
    storage:storage,
    fileFilter:imageFilter
})
const config = require('../configuration_folder/cloudinaryconfig')
cloudinary.config({
    cloud_name: config.cloud_name,
    api_key : config.api_key,
    api_secret : config.api_secret
})
//main post image uploader
const post = require('../models/post')
router.put('/postimg/:id', upload.single('picture'), async(req, res) => {
    var image = req.file.path
    if(!image){
        res.json({message:`Error: No file selected`})
    }
    else{
        const result = await cloudinary.uploader.upload(image)
        const img =  result.original_filename
        let imgUrl = result.secure_url
        let publicId = result.public_id
        const Response = await post.findByIdAndUpdate(req.params.id,{
            picture:imgUrl
        }, {new:true})
        res.json({
            response:Response,
            message:'Message: Picture uploaded successfully'
        })
    }
    
})

//campus gist image uploader
const campus = require('../models/campusgist')
router.put('/campusimg/:id', upload.single('picture'), async(req, res) => {
    var image = req.file.path
    if(!image){
        res.json({message:`Error: No file selected`})
    }
    else{
        const result = await cloudinary.uploader.upload(image)
        const img =  result.original_filename
        let imgUrl = result.secure_url
        let publicId = result.public_id
        const Response = await campus.findByIdAndUpdate(req.params.id,{
            picture:imgUrl
        }, {new:true})
        res.json({
            response:Response,
            message:'Message: Picture uploaded successfully'
        })
    }
    
})
//celebrity image uploader
const celeb = require('../models/celebrityinfo')
router.put('/celebrityimg/:id', upload.single('picture'), async(req, res) => {
    var image = req.file.path
    if(!image){
        res.json({message:`Error: No file selected`})
    }
    else{
        const result = await cloudinary.uploader.upload(image)
        const img =  result.original_filename
        let imgUrl = result.secure_url
        let publicId = result.public_id
        const Response = await celeb.findByIdAndUpdate(req.params.id,{
            picture:imgUrl
        }, {new:true})
        res.json({
            response:Response,
            message:'Message: Picture uploaded successfully'
        })
    }
    
})
//sport image uploader
const sport = require('../models/sport')
router.put('/sportimg/:id', upload.single('picture'), async(req, res) => {
    var image = req.file.path
    if(!image){
        res.json({message:`Error: No file selected`})
    }
    else{
        const result = await cloudinary.uploader.upload(image)
        const img =  result.original_filename
        let imgUrl = result.secure_url
        let publicId = result.public_id
        const Response = await sport.findByIdAndUpdate(req.params.id,{
            picture:imgUrl
        }, {new:true})
        res.json({
            response:Response,
            message:'Message: Picture uploaded successfully'
        })
    }
    
})

module.exports = router