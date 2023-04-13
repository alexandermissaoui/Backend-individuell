const Product = require('../schemas/productSchema');

/*
  POST /api/products
  Creates a new product
 */


  exports.createNewProduct = (req, res) => {
    const { name, description, price, imageUrl } = req.body;
  
    if(!name || !description || !price || !imageUrl) {
      res.status(400).json({
        message: 'You need to enter all the fields'
      })
      return
    }
  
  
    Product.create({ name, description, price, imageUrl })
      .then(data => res.status(201).json(data))
      .catch(() => res.status(500).json({ message: 'Someting went wrong when adding the product'}))
  }

/*
  GET /api/product
  Get a list of all the products
*/
exports.getProducts = (req, res) => {

  Product.find()
    .then(products => {
      res.status(200).json(products)
    })
    .catch(() => {
      res.status(500).json({
        message: 'Could not get the products'
      })
    })
}

//get product by id

exports.getProductById = (req, res) => {

  Product.findById(req.params.id)
    .then(product => {
      if(!product) {
        res.status(404).json({ message: 'could not find that product'})
        return
      }

      res.status(200).json( product ) 
    })
    .catch(() => {
      res.status(500).json({
        message: 'Someting went wrong'
      })
    })
  }


//PUT
exports.updateProduct = (req, res) => {

  Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(product => {
      if(!product) {
        res.status(404).json({ message: 'could not find that product'})
        return
      }

      res.status(200).json(product)
    })
    .catch(() => {
      res.status(500).json({
        message: 'Someting went wrong when updating the product'
      })
    })

}

/*
  DELETE /api/product/:id
*/
exports.deleteProduct = (req, res) => {

  Product.findByIdAndDelete(req.params.id)
    .then(product => {
      if(!product) {
        res.status(404).json({ message: 'could not find that product'})
        return
      }

      res.status(200).json({ id: product._id })
    })
    .catch(() => {
      res.status(500).json({
        message: 'Someting went wrong when deleteing the product'
      })
    })

}