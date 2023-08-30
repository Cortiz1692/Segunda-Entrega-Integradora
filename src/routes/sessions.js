const { Router } = require('express');
const { check } = require('express-validator');

const { } = require('../middlewares');

const { singup,
    failSingup,
    Login,
    failLogin,
    changePass,
    callGitHub, } = require('../controller/sessions');

const router = Router();


router.post('/signup', passport.authenticate("signupStrategy", {
    failureRedirect: "/api/sessions/fail-signup"
}), singup);

router.get('/fail-signup', failSingup);

router.post("/login", passport.authenticate("loginStrategy", {
    failureRedirect: "/api/sessions/fail-login"
}), Login);

router.get('/fail-login', failLogin);

router.post('/changePass', changePass);

router.get("/loginGithub", passport.authenticate("githubLoginStrategy"));

router.get("/github-callback", passport.authenticate("githubLoginStrategy", {
    failureRedirect: "/api/sessions/fail-signup"
}), callGitHub);





module.exports = router;