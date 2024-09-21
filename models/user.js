const mongoose = require ('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/DeedApp')

const userSchema = mongoose.Schema({
   firstname:String,
   middlename:String,
   lastname: String,
   email: String,
   mobno: String,
   password: String,
   Cpassword: String,
   captchahere: String 
})

module.exports = mongoose.model('user', userSchema);