const express = require('express')
const bodyParser = require('body-parser')
const bcrypt = require('bcryptjs')

const {mongoose} = require('./mongoose')
const {User} = require('./user.js')


var app = express()

app.set('view engine','ejs')
app.use(express.static('images'))
app.use(express.static('stylesheet'))
// app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/home',(req, res)=>{
    res.render('index')
})

app.get('/about',(req,res)=>{
    res.render('about')
})

app.get('/signin',(req,res)=>{
    res.render('login')
})

app.get('/signup',(req,res)=>{
    res.render('signin')
})
app.get('/profile',(req,res)=>{
    res.render('profile',{
        name: 'Abinash Dutta'
    })
    console.log(req.body.userName)
})



app.post('/signup',(req,res)=>{
    res.redirect('/profile')
    new User({
        name:req.body.userName,
        email:req.body.inputEmail,
        password:req.body.inputPassword,
        instituteName:req.body.instituteName,
        position:req.body.position,
        phonenumber:req.body.phonenumber
    }).save().then((docs)=>{
        console.log('User is generated', docs)
    })
})

app.post('/signin',(req,res)=>{
    var email = req.body.inputEmail
    var password = req.body.inputPassword
    User.findOne({'email': email}).then((user)=>{
        if(user){
            bcrypt.compare(password, user.password, (err, result)=>{
                if(result){
                    res.redirect('/profile')
                }
            })
        }
    },(e)=>{
        res.status(400).send(e)
    })
})
app.listen(3000, ()=>{
    console.log('Connected to server')
})

