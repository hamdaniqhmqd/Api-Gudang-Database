const fs = require('fs');
const path = require('path');
const dbPath = path.join(__dirname, '../../data/supplier.json');

function loadDatabase() {
  console.log("Loading database from:", dbPath); // Menampilkan lokasi database saat memuat
  const data = fs.readFileSync(dbPath);
  return JSON.parse(data);
}

function saveDatabase(data) {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
}

exports.getAllItems = () => {
  const db = loadDatabase();
  return db.supplier;
};

exports.getItemById = (id) => {
  const db = loadDatabase();
  return db.supplier.find(item => item.id_supplier === parseInt(id));
};

exports.createItem = (item) => {
  const db = loadDatabase();
  const newItem = { ...item };
  db.supplier.push(newItem);
  
  saveDatabase(db);
  return newItem;
};

exports.updateItem = (id, updatedData) => {
  const db = loadDatabase();
  const index = db.supplier.findIndex(item => item.id_supplier === parseInt(id));
  
  if (index === -1) {
    console.error(`Error: Item with ID ${id} not found`);
    throw new Error(`Item with ID ${id} not found`);
  }
  
  db.supplier[index] = { ...db.supplier[index], ...updatedData };
  saveDatabase(db);
  
  console.log(`Item with ID ${id} successfully updated`);
  return db.supplier[index];
};

exports.deleteItem = (id) => {
  const db = loadDatabase();
  const initialLength = db.supplier.length;
  
  db.supplier = db.supplier.filter(item => item.id_supplier !== parseInt(id));
  
  if (db.supplier.length === initialLength) {
    console.error(`Error: Item with ID ${id} not found`);
    throw new Error(`Item with ID ${id} not found`);
  }
  
  saveDatabase(db);
  console.log(`Item with ID ${id} successfully deleted`);
};

