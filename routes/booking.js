const express = require('express')
const authVerify = require('../middleware/authVerify')
const router = express.Router()
const { rate, create } = require('./../controllers/bookingCtrl')

router.post('/rate/:id', authVerify, rate)
router.post('/:id', authVerify, create)

module.exports = router
