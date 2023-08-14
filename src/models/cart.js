const { Schema, model } = require('mongoose');

const CartSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  thumbnails: String,
  code: String,
  stock: Number,
  status: Boolean,
  category: String,
});

const Product = mongoose.model('Product', productSchema);

module.exports = model( 'Cart', CartSchema );