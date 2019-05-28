const express = require('express')
const path    = require("path");
const app = express()

app.use(express.static("public"));

app.get('/', (req, res) => {
	res.sendFile (path.join(__dirname + '/public/index.html'))
})

app.get('/tablas', (req, res) => {
	res.sendFile(path.join(__dirname, '/public/tablas.html'))
})

app.get('/accesorios', (req, res) => {
	res.sendFile(path.join(__dirname, '/public/accesorios.html'))
})

app.get('/articulos', (req, res) => {
	res.sendFile(path.join(__dirname, '/public/articulos.html'))
})

app.get('/login', (req, res) => {
	res.sendFile(path.join(__dirname, '/public/login.html'))
})

app.get('/producto', (req, res) => {
	res.sendFile(path.join(__dirname, '/public/producto.html'))
})


app.listen(8989)