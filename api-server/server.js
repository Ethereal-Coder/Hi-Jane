const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app  = express()

app.use(bodyParser.urlencoded({extended:false}))

app.use(cors())

const router = require('./router/user.js')
app.use(router)

app.listen(3002,()=>{
    console.log('hi-jane api server boot')
})