const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()

app.set('view engine', 'ejs')
app.set('views', './views')

app.use('/node_modules', express.static('./node_modules'))

fs.readdir(path.join(__dirname, "./router"), (err, filenames) => {
    if (err) return console.log('router read failed')
    filenames.forEach(filename => {
        const router = require(path.join(__dirname, "./router", filename))
        app.use(router)
    })
})

app.listen(3001, () => {
    console.log('hi-jane web server boot')
})
