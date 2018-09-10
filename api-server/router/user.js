const express = require('express')

const ctrl = require('../controller/user.js')

const router = express.Router()

router.post('/user-sign-up',ctrl.signUp)

router.post('/user-login',ctrl.login)

module.exports = router