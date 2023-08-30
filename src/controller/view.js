const { response } = require('express');


const viewsRouter = async(req, res = response ) => {

    res.render("home");
}

const showLoginViewRegistro = async(req, res = response ) => {

    res.render("signup");
}


const showLoginViewLogin = async(req, res = response ) => {

    res.render("login");
}


const checkUserAuthenticated = async(req, res = response ) => {

    console.log(req.user);

    res.render("profile",{user: req.user});
}

const changePassword = async(req, res = response ) => {
    res.render("changePassword")
}



module.exports = {
    viewsRouter,
    showLoginViewRegistro,
    showLoginViewLogin,
    checkUserAuthenticated,
    changePassword
}