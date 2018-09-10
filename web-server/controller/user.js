const showLoginPage = (req,res)=>{
    res.render('./user/login.ejs',{})
}

const showRegisterPage = (req,res)=>{
    res.render('./user/register.ejs',{})
}

module.exports = {
    showLoginPage,
    showRegisterPage
}