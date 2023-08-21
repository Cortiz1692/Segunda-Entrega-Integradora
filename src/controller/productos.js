const { response } = require('express');
const { Producto } = require('../models');


const obtenerProductos = async(req, res = response ) => {

    const { limite = 10, desde = 0 } = req.query;
    const query = { estado: true };
    

    const [ total, productos ] = await Promise.all([
        Producto.countDocuments(query),
        Producto.find(query)
            .populate('usuario', 'nombre')
            .populate('categoria', 'nombre')
            .skip( Number( desde ) )
            .limit(Number( limite ))
    ]);

    res.json({
        total,
        productos
    });
}
const obtenerProductosPaginados = async (req, res) => {
    const limit = parseInt(req.query.limit) || 10; // Límite de productos por página
    const page = parseInt(req.query.page) || 1; // Página actual
    const sort = req.query.sort || 'asc'; // Orden de clasificación
    const query = req.query.query || ''; // Consulta de búsqueda

    try {
        // Obtenemos los productos usando la función asincrónica getProductsPaginated
        const result = await productMongo.getProductsPaginated(limit, page, sort, query);
        
        // Calculamos el número total de páginas según el límite de productos
        const totalPages = Math.ceil(result.totalCount / limit);
        
        // Verificamos si hay una página anterior y siguiente
        const hasPrevPage = page > 1;
        const hasNextPage = page < totalPages;

        // Construimos el objeto de respuesta
        const response = {
            status: 'success',
            payload: result.products, // Productos de la página actual
            totalPages,
            prevPage: hasPrevPage ? page - 1 : null,
            nextPage: hasNextPage ? page + 1 : null,
            page,
            hasPrevPage,
            hasNextPage,
            // Enlaces a páginas anteriores y siguientes con los parámetros de consulta
            prevLink: hasPrevPage ? `/api/products?limit=${limit}&page=${page - 1}&sort=${sort}&query=${query}` : null,
            nextLink: hasNextPage ? `/api/products?limit=${limit}&page=${page + 1}&sort=${sort}&query=${query}` : null
        };

        // Enviamos la respuesta con el estado 200 (éxito)
        res.status(200).json(response);
    } catch (error) {
        // Si ocurre un error, enviamos una respuesta con estado 500 (error interno del servidor)
        res.status(500).json({ error: 'Error al obtener los productos' });
    }
};


const obtenerProducto = async(req, res = response ) => {

    const { id } = req.params;
    const producto = await Producto.findById( id )
                            .populate('usuario', 'nombre')
                            .populate('categoria', 'nombre');

    res.json( producto );

}

const crearProducto = async(req, res = response ) => {

    const { estado, usuario, ...body } = req.body;

    const productoDB = await Producto.findOne({ nombre: body.nombre });

    if ( productoDB ) {
        return res.status(400).json({
            msg: `El producto ${ productoDB.nombre }, ya existe`
        });
    }

    // Generar la data a guardar
    const data = {
        ...body,
        nombre: body.nombre.toUpperCase(),
        usuario: req.usuario._id
    }

    const producto = new Producto( data );

    // Guardar DB
    await producto.save();

    res.status(201).json(producto);

}

const actualizarProducto = async( req, res = response ) => {

    const { id } = req.params;
    const { estado, usuario, ...data } = req.body;

    if( data.nombre ) {
        data.nombre  = data.nombre.toUpperCase();
    }

    data.usuario = req.usuario._id;

    const producto = await Producto.findByIdAndUpdate(id, data, { new: true });

    res.json( producto );

}

const borrarProducto = async(req, res = response ) => {

    const { id } = req.params;
    const productoBorrado = await Producto.findByIdAndUpdate( id, { estado: false }, {new: true });

    res.json( productoBorrado );
}




module.exports = {
    crearProducto,
    obtenerProductosPaginados,
    obtenerProductos,
    obtenerProducto,
    actualizarProducto,
    borrarProducto
}