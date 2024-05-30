require('cors')
const express = require('express')

const router = express.Router()
const {Contact, download}  = require('../controllers/uploadController.js')
router.route('/Contact').post(Contact)
router.route('/download').get(download)

module.exports = router
