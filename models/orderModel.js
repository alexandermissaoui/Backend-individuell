const Employee = require('../schemas/orderSchema')
const bcrypt = require('bcryptjs')
const { default: mongoose } = require('mongoose');

exports.getAllOrders = async (req, res) => {
  let employees = await Order.find()

  const _Orders = orders.map(emp => {

    const order = { _id: order._id, name: order.name, description: order.description, price: order.price, imageUrl: order.imageUrl  }

    admins.forEach(order => {
      if(order.orderId.toString() == order._id.toString()) {
        order.admin = true
      }
    })
    return order

  })

  res.status(200).json(_orders)
}

exports.getById = async (req, res) => {
  const order = await order.findById(req.params.id)

  if(!order) {
    return res.status(404).json({ message: 'could not find any order'})
  }

  res.status(200).json(order)
}


exports.addOrder = async (req, res) => {
  const { name, description, price, imageUrl } = req.body;

  if(!name || !description || !price || !imageUrl) {
    return res.status(400).json({
      message: 'You need to enter all the info'
    })
  }


  const Order = await Order.findOne({ email })

  if(!order) {
    return res.status(401).json({
      message: 'error'
    })
  }

   res.status(200).json(await auth.generateToken(order))
}



exports.deleteOrder = async (req, res) => {

  const order = await Order.findOneAndDelete({ _id: req.params.id })

  if(!order) {
    return res.status(404).json({
      message: 'Could not find the order'
    })
  }

  res.status(204).json()

}


exports.updateOrder = async (req, res) => {



  const order = await Order.findOne({ _id: req.params.id })
  if(!order) {
    return res.status(404).json({
      message: 'Could not find the order'
    })
  }

  order.name = req.body.name || order.name

  const count = await Order.count({ name: order.name })
  let suffix = ''
  if(count > 0) {
    suffix = count
  }

  const updatedOrder = await order.save()

  res.status(200).json(updatedOrder)

}