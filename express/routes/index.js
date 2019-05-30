const express = require('express');
const router = express.Router();
const customerController = require('../controller/customerController');

router.get('/', customerController.listProduct);

router.get('/tablas',customerController.listSurfboard);

router.get('/accesorios',customerController.listAccesories);
	
/*
router.get('/articulos', (req, res) => {
	res.sendFile(path.join(__dirname, '/public/articulos.html'))
})

router.get('/login', (req, res) => {
	res.sendFile(path.join(__dirname, '/public/login.html'))
})

router.get('/producto', (req, res) => {
	res.sendFile(path.join(__dirname, '/public/producto.html'))
})
*/

module.exports = router;