const connection = require('../db/db.js')

const moment = require('moment')

const signUp = (req, res) => {
    const user = req.body
    console.log(user)
    if (user.name.trim().length <= 0 || user.nick.trim().length <= 0 || user.pwd.trim().length <= 0) {
        return res.send({
            state: 1,
            msg: 'name or nick or pwd is null'
        })
    }

    const sql_select = 'select count(*) as count from user where name = ?'
    connection.query(sql_select, [user.name], (err, result) => {
        if (err) return res.send({
            state: 2,
            msg: err.message
        })
        console.log(result)
        if (result[0].count !== 0) return res.send({
            state: 3,
            msg: 'the name is already registered'
        })
        user.ctime = moment().format('YYYY-MM-DD HH:mm:ss')
        const sql_insert = 'insert into user set ?'
        connection.query(sql_insert, [user], (err, result) => {
            if (err) return res.send({
                state: 4,
                msg: err.message
            })
            console.log(result)
            if(result.affectedRows !== 1) return res.send({
                state: 5,
                msg: 'user register failed'
            })
            res.send({
                state: 0,
                msg:'user register success'
            })
        })
    })
}

const login = (req, res) => {
    const suser = req.body
    console.log(suser)
    const sql = 'select * from user where name = ? and pwd = ?'
    connection.query(sql,[suser.name,suser.pwd],(err,result)=>{
        if(err) return res.send({
            state: 1,
            msg: err.message
        })
        console.log(result)
        if(result.length !== 1) return res.send({
            state: 2,
            msg: "user login failed"
        })
        console.log(result[0].name)
        res.send({
            state: 0,
            msg: 'user login success'
        })
    })
}

module.exports = {
    signUp,
    login
}

