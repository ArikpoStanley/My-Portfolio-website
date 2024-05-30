require('dotenv').config()
const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    service: "gmail",
    secure: true,
    auth: {
        user: process.env.AUTH_EMAIL,
        pass: process.env.AUTH_PASS
    },
})

const Upload = async (req,res) => {
    res.cookie('visited', true, {maxAge: 10000})
    try {
        const {name, email, message} = req.body
        const mailOptions = {
            from: email,
            to: process.env.AUTH_EMAIL,
            subject: "Feedback Message",
            text: `My name is ${name}, ` + message
        }
        //Sending token to user 
        transporter.sendMail(mailOptions).then(response=>{
            return res.status(200).json({message: "Signup Successful"})
        })
        .catch(error=>{
           console.log(error)
        })
        }catch(error) {
        console.log(error);
       }
    }

const Download = async(req,res) =>{
    try {
        res.Download(path.join(__dirname,'files/mycv.pdf'), function(err){
            console.log(err);
            console.log(__dirname);
        })
    } catch (error) {
        
    }
    
}
   
module.exports = {
    Upload, 
    Download
}