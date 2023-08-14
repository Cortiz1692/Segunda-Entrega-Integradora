const { Router } = require('express');

const { crearCategoria,
        obtenerCategorias,
        obtenerCategoria,
        actualizarCategoria, 
        borrarCategoria } = require('../controller/categorias');

const router = Router();


router.get('/', obtenerCategorias );

router.get('/:id', obtenerCategoria );

router.post('/', crearCategoria );

router.put('/:id',actualizarCategoria );

router.delete('/:id',borrarCategoria);



module.exports = router;