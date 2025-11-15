console.log(`Chargement du code`);
// index.js - Server Express pour ton site de ouf
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Servir les fichiers static (styles.css & script.js) depuis /public
app.use(express.static(path.join(__dirname, 'public')));
console.log(`Les fichiers public sont servis...`);


// Servir ton index.html qui est en arrière (../)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html')); // 🔥 ON LE MET DANS LE MÊME DOSSIER QUE index.js
});

// Lancement du bazar
app.listen(PORT, () => {
  console.log(`🚀 Server créé sur le port ${PORT} !`);
  console.log(`lien: http://localhost:${PORT} `);
});