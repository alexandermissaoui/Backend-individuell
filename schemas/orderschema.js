const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderSchema = new Schema({
  name:           { type: String, required: true },
  description:    { type: String, required: true },
  price:          { type: String, required: true },
  imageUrl:       { type: String, required: true }
})



module.exports = mongoose.model('Order', orderSchema)