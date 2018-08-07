const bodyParser = require('body-parser')
const celebrity = require('../models/celebrityinfo')

//create new celebrity information
exports.createNewCelebrityInfo = async (req, res) => {
    const body = req.body
    if(!body.fullname || !body.stagename || !body.company || !body.dob || !body.age || !body.backgroundinfo || !yearstarted){
        res.status(403).json({
            message:`Please ensure all fields are properly filled`
        })
    }
    else {
        const newInfo = await celebrity.create(body)
        res.status(200).json({
            message:'created',
            info:newInfo
        })
    }
}