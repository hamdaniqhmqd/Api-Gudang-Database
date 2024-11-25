const express = require('express');
const router = express.Router();
const transaksiController = require('../controllers/transaksiController');

router.get('/transaksi', transaksiController.getAllItems);
router.post('/transaksi/create', transaksiController.createItem);
router.get('/transaksi/:id', transaksiController.getItemById);
router.put('/transaksi/update/:id', transaksiController.updateItem);
router.delete('/transaksi/delete/:id', transaksiController.deleteItem);

module.exports = router;
