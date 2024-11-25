const fs = require('fs');
const path = require('path');
const dbPath = path.join(__dirname, '../../data/transaksi.json');

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
  return db.transaksi;
};

exports.getItemById = (id) => {
  const db = loadDatabase();
  return db.transaksi.find(item => item.id_transaksi === parseInt(id));
};

exports.createItem = (item) => {
  const db = loadDatabase();
  const newItem = { ...item };
  db.transaksi.push(newItem);
  
  saveDatabase(db);
  return newItem;
};

exports.updateItem = (id, updatedData) => {
  const db = loadDatabase();
  const index = db.transaksi.findIndex(item => item.id_transaksi === parseInt(id));
  
  if (index === -1) {
    console.error(`Error: Item with ID ${id} not found`);
    throw new Error(`Item with ID ${id} not found`);
  }
  
  db.transaksi[index] = { ...db.transaksi[index], ...updatedData };
  saveDatabase(db);
  
  console.log(`Item with ID ${id} successfully updated`);
  return db.transaksi[index];
};

exports.deleteItem = (id) => {
  const db = loadDatabase();
  const initialLength = db.transaksi.length;
  
  db.transaksi = db.transaksi.filter(item => item.id_transaksi !== parseInt(id));
  
  if (db.transaksi.length === initialLength) {
    console.error(`Error: Item with ID ${id} not found`);
    throw new Error(`Item with ID ${id} not found`);
  }
  
  saveDatabase(db);
  console.log(`Item with ID ${id} successfully deleted`);
};

