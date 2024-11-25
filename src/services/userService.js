const fs = require('fs');
const path = require('path');
const dbPath = path.join(__dirname, '../../data/user.json');

function loadDatabase() {
  console.log("Loading database from:", dbPath);
  const data = fs.readFileSync(dbPath);
  return JSON.parse(data);
}

function saveDatabase(data) {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
}

exports.getAllItems = () => {
  const db = loadDatabase();
  return db.user;
};

exports.getItemById = (id) => {
  const db = loadDatabase();
  return db.user.find(item => item.id === parseInt(id));
};

exports.createItem = (item) => {
  const db = loadDatabase();
  const newItem = { ...item };
  db.user.push(newItem);
  
  saveDatabase(db);
  return newItem;
};

exports.updateItem = (id, updatedData) => {
  const db = loadDatabase();
  const index = db.user.findIndex(item => item.id === parseInt(id));
  
  if (index === -1) {
    console.error(`Error: Item with ID ${id} not found`);
    throw new Error(`Item with ID ${id} not found`);
  }
  
  db.user[index] = { ...db.user[index], ...updatedData };
  saveDatabase(db);
  
  console.log(`Item with ID ${id} successfully updated`);
  return db.user[index];
};

exports.deleteItem = (id) => {
  const db = loadDatabase();
  const initialLength = db.user.length;
  
  db.user = db.user.filter(item => item.id !== parseInt(id));
  
  if (db.user.length === initialLength) {
    console.error(`Error: Item with ID ${id} not found`);
    throw new Error(`Item with ID ${id} not found`);
  }
  
  saveDatabase(db);
  console.log(`Item with ID ${id} successfully deleted`);
};
