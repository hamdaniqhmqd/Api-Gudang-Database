const itemService = require('../services/userService');

exports.getAllItems = (req, res) => {
  const items = itemService.getAllItems();
  res.json(items);
};

exports.getItemById = (req, res) => {
  const item = itemService.getItemById(req.params.id);
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ message: "Item not found" });
  }
};

exports.createItem = (req, res) => {
  const newItem = itemService.createItem(req.body);
  res.status(201).json(newItem);
};

exports.updateItem = (req, res) => {
  const updatedItem = itemService.updateItem(req.params.id, req.body);
  res.json(updatedItem);
};

exports.deleteItem = (req, res) => {
  itemService.deleteItem(req.params.id);
  res.status(204).end();
};
