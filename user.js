const mongoose = require('mongoose')
const validator = require('validator')

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
        type: Number,
        require: true,
        minlength: 10
    }
})

var User = mongoose.model('User',UserSchema)
module.exports = {User}
