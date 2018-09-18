const bodyParser = require('body-parser')
const bcrypt = require('bcryptjs')
const test = require('../models/test')

exports.test = (req, res) => {
    const hash = bcrypt.hashSync(req.body.password,15)
    if(!req.body.name || !req.body.email || !req.body.password || !req.body.phone){
        res.json({message:`Ensure all fields are filled`})
    }
    else{
        test.create({
            name:req.body.name,
            email:req.body.email,
            password:hash,
            phone:req.body.phone
        }, (err, test) => {
            if(err){
                res.json(err)
            }
            else{
                res.json(test)
            }
        })
    }
    
}
//comment
