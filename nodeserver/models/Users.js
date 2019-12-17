const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userName:{type:String},
    userID:{type:String},
    password:{type:String},
    role:{type:String},
})

module.exports = mongoose.model('users',userSchema,'users');