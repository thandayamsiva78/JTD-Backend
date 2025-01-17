const express = require('express');
const { title } = require('process');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { title: "Home", user: { name: 'Siva' } });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
