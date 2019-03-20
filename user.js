const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

var UserSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message:'{VALUE} is not a valid email'
        }

    },
    password: {
        type: String,
        require: true,
        minlength: 1
    },
    name: {
        type: String,
        require: true,
        minlength: 1
    },
    instituteName: {
        type: String,
        require: true,
        minlength: 1
    },
    position: {
        type: String,
        require: true,
        minlength: 1
    },
    phonenumber: {
        type: String,
        require: true,
        minlength: 10
    }
})

UserSchema.pre('save',function(next){
    var user = this

    if(user.isModified('password')){
        bcrypt.genSalt(10, (err,salt)=>{
            bcrypt.hash(user.password, salt, (err, hash)=>{
                user.password = hash
                next()
            })
        })
    }
    else{
        next()
    }
})

var User = mongoose.model('User',UserSchema)
module.exports = {User}
