const { Router } = require('express');

const { crearProducto,
        obtenerProductos,
        obtenerProducto,
        actualizarProducto, 
        borrarProducto } = require('../controller/productos');

const router = Router();

/**
 * {{url}}/api/categorias
 */

//  Obtener todas las categorias - publico
router.get('/', obtenerProductos );

// Obtener una categoria por id - publico
router.get('/:id', obtenerProducto );

// Crear categoria - privado - cualquier persona con un token válido
router.post('/', crearProducto );

// Actualizar - privado - cualquiera con token válido
router.put('/:id', actualizarProducto );

// Borrar una categoria - Admin
router.delete('/:id', borrarProducto);


module.exports = router;