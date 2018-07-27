const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
const db = require('./configuration_folder/dbconfig')


//port
const port = process.env.PORT || 6000

// Database connection
        mongoose.connect(db.mongoURI)
        .then(() => {
            app.listen(port, (req,res)=>{
                console.log(`Blog is working on port ${port} and database is connected`)
            })
        })
        .catch(err => console.log(err))