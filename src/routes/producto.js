const { Router } = require('express');

const { crearProducto,
    obtenerProductosPaginados,
    obtenerProductos,
    obtenerProducto,
    actualizarProducto,
    borrarProducto } = require('../controller/productos');


const router = Router();


//  Obtener todas las categorias - publico
router.get('/', obtenerProductos);

router.get('/paginated', obtenerProductosPaginados);

// Obtener una categoria por id - publico
router.get('/:id', obtenerProducto);

// Crear categoria - privado 
router.post('/', crearProducto);

// Actualizar - privado - cualquiera con token válido
router.put('/:id', actualizarProducto);

// Borrar una categoria - Admin
router.delete('/:id', borrarProducto);


module.exports = router;