const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/user', userController.getAllItems);
router.post('/user/create', userController.createItem);
router.get('/user/:id', userController.getItemById);
router.put('/user/update/:id', userController.updateItem);
router.delete('/user/delete/:id', userController.deleteItem);

module.exports = router;
