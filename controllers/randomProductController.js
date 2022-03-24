const Container = require ('../../Desafio2/index')

const data = new Container("../Desafio2/products.txt")

const product = async () => {
    try {
        const products = await data.readFile()
        let randomIndex = Math.floor(Math.random() * 6)
        let product = products[randomIndex]
        console.log(product);
        return product
        
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = product