const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
const db = require('./configuration_folder/dbconfig')
const routes = require('./routes/routes')
app.use('/', routes)
const errorHandler = require('./handlers/errorHandler');
const env = require('dotenv').config()

app.use(errorHandler.notFound);


// Otherwise this was a really bad error we didn't expect! Shoot eh
if (app.get('env') === 'development') {
  /* Development Error Handler - Prints stack trace */
  app.use(errorHandler.developmentErrors);
}

// production error handler
app.use(errorHandler.productionErrors);

//port
const port = process.env.PORT || 6000

// Database connection
mongoose.Promise = global.Promise
        mongoose.connect(db.mongoURI)
        .then(() => {
            app.listen(port, (req,res)=>{
                console.log(`Blog is working on port ${port} and database is connected`)
            })
        })
        .catch(err => console.log(err))