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

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
