const { response, request } = require('express');


const singup =  async(req, res = response ) => {

    res.render("login",{message:"usuario registrado"});
}

const failSingup =   async(req, res = response ) => {

    res.render("signup",{error:"No se pudo registrar el usuario"});
}

const Login =  async(req, res = response ) => {

    res.redirect("/perfil");
}

const failLogin = async(req, res = response ) => {

    res.render("login",{error:"Credenciales invalidas"});
}

const changePass = async(req, res = response ) => {

    try {
        const form = req.body;
        const user = await usersService.getByEmail(form.email);
        if(!user){
            return res.render("changePassword",{error:"No es posible cambiar la contraseña"});
        }
        user.password = createHash(form.newPassword);
        // console.log(user);
        await usersService.update(user._id,user);
        return res.render("login",{message:"Contraseña restaurada"})
    } catch (error) {
        res.render("changePassword",{error:error.message});
    }
}


const callGitHub = async(req, res = response ) => {
    res.redirect("/perfil");
}

const logout = async(req, res = response ) => {
    req.logOut(error=>{
        if(error){
            return res.render("profile",{user: req.user, error:"No se pudo cerrar la sesion"});
        } else {
            //req.session.destroy elimina la sesion de la base de datos
            req.session.destroy(error=>{
                if(error) return res.render("profile",{user: req.session.userInfo, error:"No se pudo cerrar la sesion"});
                res.redirect("/");
            })
        }
    })
}

module.exports = {
    singup,
    failSingup,
    Login,
    failLogin,
    changePass,
    callGitHub,
}