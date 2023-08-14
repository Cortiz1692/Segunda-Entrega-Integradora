const { Router } = require('express');

const { crearProducto,
        obtenerProductos,
        obtenerProducto,
        actualizarProducto, 
        borrarProducto } = require('../controller/productos');

const router = Router();

router.get('/', obtenerProductos );

router.get('/:id', obtenerProducto );

router.post('/', crearProducto );

router.put('/:id', actualizarProducto );

router.delete('/:id', borrarProducto);


module.exports = router;