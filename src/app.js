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

// Root route untuk menampilkan rekomendasi daftar endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the API. Here are the available endpoints:',
    endpoints: {
      '/users': 'Get list of users',
      '/users/:id': 'Get user by ID',
      '/suppliers': 'Get list of suppliers',
      '/suppliers/:id': 'Get supplier by ID',
      '/barang': 'Get list of barang',
      '/barang/:id': 'Get barang by ID',
      '/transaksi': 'Get list of transaksi',
      '/transaksi/:id': 'Get transaksi by ID',
    }
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

