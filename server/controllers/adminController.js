const bodyParser = require('body-parser')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const admin = require('../models/admin')
const config = require('../configuration_folder/secret_config')

exports.registerUser = async (req, res) => {
    const hashpassword = bcrypt.hashSync(req.body.password,15)
    if (!req.body.name && !req.body.email && !req.body.password && !req.body.phone){
        res.json({message:`please fill all inputs`})
    }
    else{
        const result = await admin.create({
            name:req.body.name,
            email:req.body.email,
            password:hashpassword,
            phone:req.body.phone
        })
        res.json(result)
    }
}

//login user
exports.loginUser =  (req, res) => {
    if(!req.body.email || !req.body.password){
        res.json({message:'fill all inputs and login'})
    }
    else{
        admin.findOne({email:req.body.email}, (err, admin) => {
            if (err) {
                res.status(500).json({
                    message:err
                })
            }
            else if(!admin){
                res.json({message:'Invalid email'})
            }
            else {
                const adminpassword = bcrypt.compareSync(req.body.password, admin.password)
                if (!adminpassword) {
                    res.json({
                        message:`Wrong password`
                    })
                }
                else {
                    const adminToken = jwt.sign({id:admin.id,email:admin.email,phone:admin.phone, name:admin.name}, config.secreter, {expiresIn:'5h'})
                    res.json({
                        message:`welcome`,
                        admintoken:adminToken
                    })
    
                }
            }
        })
    }
}
//get all user
exports.getAllAdmin = async (req, res) => {
    const allAdmin = await admin.find().sort({'_id':-1})
    res.json(allAdmin)
}
//delete user
exports.deleteUser = async(req, res) => {
    const removeUser = await admin.findByIdAndRemove(req.params.id)
    res.json(removeUser)
}
//update user
exports.updateUser = (req, res) => {
    admin.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, Admin)=>{
        if(err){
            res.json({message:err})
        }
        else{
            res.json({
                message:'updated',
                result:Admin
            })
        }
    })
}
//get single user
exports.getSingleUser = async (req, res) => {
    const singleUser = await admin.findById(req.params.id)
    res.json(singleUser)
}