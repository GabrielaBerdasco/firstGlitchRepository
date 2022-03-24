const Container = require ('../../Desafio2/index')

const data = new Container("../Desafio2/products.txt")


const allProducts = async () => {
    try {
        const products = await data.readFile()
        /* console.log(products); */
        return products
        
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = allProducts

