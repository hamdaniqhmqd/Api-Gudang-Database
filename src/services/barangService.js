const fs = require('fs');
const path = require('path');
const dbPath = path.join(__dirname, '../../data/barang.json');

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
  return db.barang;
};

exports.getItemById = (id) => {
  const db = loadDatabase();
  return db.barang.find(item => item.id_barang === parseInt(id));
};

exports.createItem = (item) => {
  const db = loadDatabase();
  const newItem = { ...item };
  db.barang.push(newItem);
  
  saveDatabase(db);
  return newItem;
};

exports.updateItem = (id, updatedData) => {
  const db = loadDatabase();
  const index = db.barang.findIndex(item => item.id_barang === parseInt(id));
  
  if (index === -1) {
    console.error(`Error: Item with ID ${id} not found`);
    throw new Error(`Item with ID ${id} not found`);
  }
  
  db.barang[index] = { ...db.barang[index], ...updatedData };
  saveDatabase(db);
  
  console.log(`Item with ID ${id} successfully updated`);
  return db.barang[index];
};

exports.deleteItem = (id) => {
  const db = loadDatabase();
  const initialLength = db.barang.length;
  
  db.barang = db.barang.filter(item => item.id_barang !== parseInt(id));
  
  if (db.barang.length === initialLength) {
    console.error(`Error: Item with ID ${id} not found`);
    throw new Error(`Item with ID ${id} not found`);
  }
  
  saveDatabase(db);
  console.log(`Item with ID ${id} successfully deleted`);
};

