const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
    res.render('index', { title: 'pug header', header: 'you are in pug file' })
});

module.exports = routes;