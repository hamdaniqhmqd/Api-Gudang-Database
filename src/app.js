const express = require('express');
const app = express();
const transaksiRoutes = require('./routes/transaksiRoutes');
const supplierRoutes = require('./routes/supplierRoutes');
const barangRoutes = require('./routes/barangRoutes');
const userRoutes = require('./routes/userRoutes');

app.use(express.json());
app.use(userRoutes);
app.use(supplierRoutes);
app.use(transaksiRoutes);
app.use(barangRoutes);

app.get('/', (req, res) => {
  res.json({
    message: 'Selamat datang di API Gudang Pakaian, API ini digunakan untuk mengelola data barang, supplier, transaksi dan user. Dan di buat dengan Node.js dan Express.js. Berikut adalah daftar endpoint yang tersedia:',
    "endpoints": {
      "/users": "Mengambil daftar pengguna",
      "/users/:id": "Mengambil data pengguna berdasarkan ID",
      "/suppliers": "Mengambil daftar supplier",
      "/suppliers/:id": "Mengambil data supplier berdasarkan ID",
      "/barang": "Mengambil daftar barang",
      "/barang/:id": "Mengambil data barang berdasarkan ID",
      "/transaksi": "Mengambil daftar transaksi",
      "/transaksi/:id": "Mengambil data transaksi berdasarkan ID"
    }
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

