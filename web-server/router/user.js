const express = require('express')
const router = express.Router()

const ctrl = require('../controller/user.js')

router.get('/login',ctrl.showLoginPage)

router.get('/register',ctrl.showRegisterPage)

module.exports = router