const { Router } = require('express');
const { check } = require('express-validator');

const {} = require('../middlewares');

const { viewsRouter,
    showLoginViewRegistro,
    showLoginViewLogin,
    checkUserAuthenticated,
    changePassword } = require('../controller/view');

const router = Router();


router.get('/', viewsRouter );

router.get('/registro', showLoginViewRegistro );

router.get('/login', showLoginViewLogin );

router.get('/perfil', checkUserAuthenticated );

router.get('/changePassword', changePassword );







module.exports = router;