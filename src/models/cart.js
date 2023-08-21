const { Schema, model } = require('mongoose');

const CartsSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true }],
    createdAt: { type: Date, default: Date.now }
});

module.exports = model( 'Categoria', CartsSchema );