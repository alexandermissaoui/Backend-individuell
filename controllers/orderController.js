const router = require('express').Router();
const { addOrder, deleteOrder, updateOrder, getAllOrders, getById, } = require('../models/orderModel.js')

router.get('/', verifyToken, getAllOrders)
router.get('/:id', verifyToken, getById)


router.post('/add', verifyToken, addOrder)

router.delete('/:id', verifyToken, deleteOrder)
router.put('/:id', verifyToken, updateOrder)

module.exports = router;