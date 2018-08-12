const bodyParser = require('body-parser')
const nodemailer = require('node-mailer')

exports.contactUs = (req, res) => {
    var transport = nodemailer.createTransport({
        service:'Gmail',
        auth:{
          user:'isnaija.gmail.com',
          pass:process.env.GMAILPW
        }
      })
      var mailOptions = {
        from:req.body.email,
        to:'isnaija.gmail.com',
        subject:'contact us',
        html:'<p>you have receive an email from</p> <ul><li> name:'+req.body.name +'</li><li> Email:'+req.body.email+'</li><li>message:'+req.body.message+'</li></ul>'
      }
      transport.sendMail(mailOptions, (err) => {
        if (err){
          res.json('mail not sent')
        }
        else {
          res.json('mail sent')
        }
      })
    }