const express = require('express');
const router = express.Router();
const supplierController = require('../controllers/supplierController');

router.get('/supplier', supplierController.getAllItems);
router.post('/supplier/create', supplierController.createItem);
router.get('/supplier/:id', supplierController.getItemById);
router.put('/supplier/update/:id', supplierController.updateItem);
router.delete('/supplier/delete/:id', supplierController.deleteItem);

module.exports = router;
