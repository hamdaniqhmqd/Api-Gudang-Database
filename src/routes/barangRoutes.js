const express = require('express');
const router = express.Router();
const barangController = require('../controllers/barangController');

router.get('/barang', barangController.getAllItems);
router.post('/barang/create', barangController.createItem);
router.get('/barang/:id', barangController.getItemById);
router.put('/barang/update/:id', barangController.updateItem);
router.delete('/barang/delete/:id', barangController.deleteItem);

module.exports = router;
