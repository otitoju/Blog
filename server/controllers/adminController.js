const bodyParser = require('body-parser')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const admin = require('../models/admin')
const config = require('../configuration_folder/secret_config')

exports.createAdmin = async (req, res) => {
    const hashpassword = bcrypt.hashSync(req.body.password,20)
    const body = req.body
    if(!body.name || !body.email || !body.password || !body.phone){
        res.status(403).json({
            message:`Please ensure you fill all inputs`
        })
    }
    else{
        const Admin = await admin.create({
            name:body.name,
            email:body.email,
            password:hashpassword,
            phone:body.phone
        })
        res.status(200).json({
            message:'Successfully created',
            admin:Admin
        })
    }
}
//Admin loggin
exports.loginAdmin = async (req, res) => {
    if(!req.body.email || !req.body.password){
        res.status(401).json({
            message:`Please fill in both fields and sign in`
        })
    }
    else {
        await admin.findOne({email:req.body.email}, (err, admin) => {
            if (err){
                res.status(500).json({message:err})
            }
            else if(!admin) {
                res.status(401).json({message:`No admin with such email`})
            }
            else {
                const isPassword = bcrypt.compareSync(req.body.password, admin.password)
                if(!isPassword){
                    res.status(401).json({message:`Wrong password`})
                }
                else{
                    const token = jwt.sign({id:admin.id, email:admin.email, phone:admin.phone}, config.secreter, {expiresIn:'5h'})
                    const id = admin.id
                    res.json({
                        token:token,
                        id:id
                    })
                }
            }
        })
    }
}