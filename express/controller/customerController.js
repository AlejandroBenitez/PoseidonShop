const controller = {};
const path = require('path');

controller.listProduct = (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
};

controller.listSurfboard = (req,res) => {
    res.sendFile(path.join(__dirname, '../public/tablas.html'));
};

controller.listAccesories = (req,res) => {
    res.sendFile(path.join(__dirname, '../public/accesorios.html'));
};



module.exports = controller;