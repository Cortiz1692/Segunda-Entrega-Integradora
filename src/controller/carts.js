const { response } = require('express');


const obtenerCarritoId = async (req, res) => {
    const cartId = req.params.cid; // ID del carrito

    try {
        // Llamamos a la función asincrónica getCartById para obtener el carrito por su ID
        // También usamos el método 'populate' para rellenar la propiedad 'products' con los detalles de los productos referenciados
        const cart = await cartMongo.getCartById(cartId).populate('products');
        res.status(200).json({ status: 'success', cart });
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el carrito' });
    }
};

module.exports = {
    obtenerCarritoId
}
