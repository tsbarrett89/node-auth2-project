const express = require('express');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send('Node Auth2 Project')
})

module.exports = server;