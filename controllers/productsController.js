const Container = require ('../index')

const data = new Container("./products.txt")


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

