const express = require('express')
const router = express.Router()
const { catchErrors } = require('../handlers/errorhandler')
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
//appRouter.get('/posts', catchErrors(postsController.getAllBlogPosts))
router.post('/post', catchErrors(postcontroller.createNewPost))
router.get('/getposts', catchErrors(postcontroller.getAllPost))
router.get('/singlepost/:id', catchErrors(postcontroller.getSinglePost))
router.put('/updatepost/:id', catchErrors(postcontroller.updatePost))
router.delete('deletepost/:id', catchErrors(postcontroller.deletePost))
router.put('/edit/:id', catchErrors(postcontroller.editPostById))
router.post('/comments/:id', catchErrors(postcontroller.createComment))


//admin routes
router.post('/reg', catchErrors(admin.registerUser))
router.post('/signin', admin.loginUser)
router.get('/get', catchErrors(admin.getAllAdmin))
router.get('/get/:id', catchErrors(admin.getSingleUser))
router.put('/update/:id', catchErrors(admin.updateUser))
router.delete('/delete/:id', catchErrors(admin.deleteUser))

//campus routes
router.post('/postcampus', catchErrors(campuscontroller.createNewCampusGist))
router.get('/getcampusgist', catchErrors(campuscontroller.getAllCampusGist))
router.get('/getcampusgist/:id', catchErrors(campuscontroller.getSingleCampusGist))
router.delete('/deletegist/:id', catchErrors(campuscontroller.deleteCampusGist))
router.put('/updategist/:id', catchErrors(campuscontroller.updateCampusGist))

//celebrity routes
router.post('/celebritypost', catchErrors(celebritycontroller.createNewCelebrityInfo))
router.get('/getcelebritypost', catchErrors(celebritycontroller.getAllCelebrityPost))
router.get('/getcelebritypost/:id', catchErrors(celebritycontroller.getSinglePost))
router.put('updatecelebritypost/:id', catchErrors(celebritycontroller.updateCelebrityGist))
router.delete('/deletecelebritypost/:id', catchErrors(celebritycontroller.deleteCelebrityGist))

//sport routes
router.post('/sportpost', catchErrors(sportcontroller.createSportNews))
router.get('/getsportnews', catchErrors(sportcontroller.getAllSportNews))
router.get('/getsportnews/:id', catchErrors(sportcontroller.getSingleSportNews))
router.put('/updatesport/:id', catchErrors(sportcontroller.updateSportNews))
router.delete('/deletesport/:id', catchErrors(sportcontroller.deleteSportNews))

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