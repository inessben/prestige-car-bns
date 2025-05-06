const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));

// Middleware pour les routes sans extension
app.get('/:page', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', `${req.params.page}.html`));
});

app.listen(3000, () => console.log('Serveur lancé sur http://localhost:3000'));
