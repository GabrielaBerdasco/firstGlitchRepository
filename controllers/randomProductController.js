const Container = require ('../index')

const data = new Container("./products.txt")

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