const express = require('express')
const product = require('./controllers/randomProductController') 
const allProducts = require('./controllers/productsController')

const app = express()



app.get('/', (req, res) => {
    res.send('<h1>Bienvenidos!</h1>')
})

app.get('/products', (req, res) => {
    /* const products = async () => {
        console.log(await allProducts());
        return await allProducts()
    } */
    allProducts().then(products => res.send(products))
    
})

app.get('/randomProduct', (req, res) => {
    product().then(p => res.send(p));
})


const PORT = 8080

const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})

server.on("error", error => console.log(`Error en servidor ${error}`))