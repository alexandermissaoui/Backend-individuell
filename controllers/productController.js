const router = require('express').Router();
// const { createNewProduct } = require('../models/productModel')
const productModel = require('../models/productModel')
//CRUD - Create - Read - Update - Delete


//Create/Post
router.post('/', productModel.createNewProduct);
//Read/Get
router.get('/', productModel.getProducts);
//Update PUT - PATCH
router.put('/:id', productModel.updateProduct);
//Delete
router.delete('/:id', productModel.deleteProduct);

module.exports = router;

// http://localhost:9999/api/products/