const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/UnicoLAB',{usenewUrlParser: true})

module.exports={mongoose}