const { Router } = require('express');
const { obtenerCarritoId } = require('../controller/carts');

const router = Router();


router.get('/:cid', obtenerCarritoId )




module.exports = router;