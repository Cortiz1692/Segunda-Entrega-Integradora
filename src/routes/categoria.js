const { Router } = require('express');

const { crearCategoria,
        obtenerCategorias,
        obtenerCategoria,
        actualizarCategoria, 
        borrarCategoria } = require('../controllers/categorias');

const router = Router();


//  Obtener todas las categorias - publico
router.get('/', obtenerCategorias );

// Obtener una categoria por id - publico
router.get('/:id', obtenerCategoria );

// Crear categoria - privado - cualquier persona con un token válido
router.post('/', crearCategoria );

// Actualizar - privado - cualquiera con token válido
router.put('/:id',actualizarCategoria );

// Borrar una categoria - Admin
router.delete('/:id',borrarCategoria);



module.exports = router;