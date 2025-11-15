console.log(`Chargement du code`);
// index.js - Server Express pour ton site de ouf
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Servir les fichiers static (styles.css & script.js) depuis /public
app.use(express.static(path.join(__dirname, 'public')));
console.log(`Les fichiers public sont servis...`);


// Ajoute ça dans ton index.js, avant le app.get('*')
app.get('/knutv1', (req, res) => {
  res.download(path.join(__dirname, 'knutv1.tar.gz'), 'KnutMD-v1.tar.gz');
});
app.get('/knutv2', (req, res) => {
  res.download(path.join(__dirname, 'knutv2.tar.gz'), 'KnutMD-v2.tar.gz');
});
app.get('/knutv3', (req, res) => {
  res.download(path.join(__dirname, 'knutv3.tar.gz'), 'KnutMD-v3.tar.gz');
});
// Servir ton index.html qui est en arrière (../)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html')); // 🔥 ON LE MET DANS LE MÊME DOSSIER QUE index.js
});

// Lancement du bazar
app.listen(PORT, () => {
  console.log(`🚀 Server créé sur le port ${PORT} !`);
  console.log(`lien: http://localhost:${PORT} `);
});