let mongoose = require('mongoose')

// define the schema for our user model
let enquiry = mongoose.Schema({
    c: Object
})

module.exports = mongoose.model('enquiry', enquiry)