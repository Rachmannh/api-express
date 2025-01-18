// Import express
const express = require("express");

// Inisialisasi aplikasi Express
const app = express();

// Tentukan port tempat server akan berjalan
const PORT = 3000;

// Route utama
app.get("/", (req, res) => {
  res.send("Welcome to Express.js");
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
