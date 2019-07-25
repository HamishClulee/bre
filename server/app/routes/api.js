let express = require('express')
let router = express.Router()
let _enquiry = require('../models/enquiry.js')

router.post('/enquire', (req, res) => {
    let enquiry = new _enquiry({
        c: req.body
    })
    enquiry.save(err => {
        if (!err) {
            return res.status(200).send('Have a cookie!')
        } else {
            return res.status(502).send('Something went wrong when saving that email....')
        }
    })
})

module.exports = router
