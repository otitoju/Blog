const bodyParser = require('body-parser')
const campus = require('../models/campusgist')

//create new gist
exports.createNewCampusGist = async (req, res) => {
    const body = req.body
    if(!body.title || !body.content || !body.school){
        res.status(403).json({
            message:`Please ensure all fields are filled`
        })
    }
    else {
        const Campusgist = await campus.create({
            title:body.title,
            content:body.content,
            school:body.school
        })
        res.status(200).json({
            message:`created`,
            gist:Campusgist
        })
    }
}

//get all campus gist
exports.getAllCampusGist = async (req, res) => {
    const Allgist = await campus.find().sort({'_id':-1})
    res.status(200).json({
        gist:Allgist
    })
}

//get single campus gist
exports.getSingleCampusGist = async (req, res) => {
    const singleGist = await campus.findById(req.params.id)
    res.status(200).json({
        gist:singleGist
    })
}

//delete gist
exports.deleteCampusGist = async (req, res) => {
    const removeGist = await campus.findByIdAndRemove(req.params.id)
    res.status(200).json({
        message:`deleted`,
        details:removeGist
    })
}

//update campus gist
exports.updateCampusGist = async (req, res) => {
    const updateGist = await campus.findByIdAndUpdate(req.params.id, req.body, {new:true})
    res.status(200).json({
        message:'updated',
        details:updateGist
    })
}