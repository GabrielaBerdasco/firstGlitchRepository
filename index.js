const fs = require('fs')
const products = require("./products")

class Container{
    constructor(filename){
        this.filename = filename
    }

    async writeFile(data){
        try {
            let dataToString = JSON.stringify(data)
            await fs.promises.writeFile(this.filename, dataToString)
            console.log("Nuevo archivo creado");
        } catch (error) {
            console.log(error);
        }
    }

    async readFile(){
        let content = await fs.promises.readFile(this.filename, "utf-8")
        let parsedContent = JSON.parse(content)
        return parsedContent
    }

    async saveObject(pName, pPrice, pImage){
        try{
            let products = await this.readFile()
            let lastId = 0
            let itemsOnArray = products.length

            if(itemsOnArray !== 0){
                lastId = products[itemsOnArray-1].id
                lastId++
            } else {
                lastId++
            }

            let data = {
                name: pName,
                price: pPrice,
                thumbnail: pImage,
                id: lastId
            }
            console.log(data);
            
            let newArray = [...products, data]
            console.log(newArray);
            this.writeFile(newArray)
            console.log(`Dato escritos, id: ${lastId}`);
        } catch (error) {
            console.log(error);
        }
    } 

    async getById(idNumber){
        try {
            let parsedData = await this.readFile()
            let product = parsedData.find(p => p.id === idNumber)
            if(product){
                console.log(product);
            } else {
                console.log("Su producto no fue encontrado");
            }
        } catch (error) {
            throw new Error(error)
        }
    }

    async getAll(){
        try {
            let data = await this.readFile()
            console.log(data);
        } catch (error) {
            throw new Error(error)
        }
    }

    async deleteById(idNumber){
        try {
            let data = await this.readFile()
            let products = data.filter(p => p.id !== idNumber)
            console.log(products);
            if(products){
                await this.writeFile(products)
            } else {
                console.log("Su producto no fue encontrado");
            }
        } catch (error) {
            throw new Error(error)
        }
    }

    async deleteAll(){
        try{
            await fs.promises.writeFile(this.filename, "[]")
            console.log("Contenido borrado");
        } catch(error) {
            throw new Error(error)
        }     
    }
}

/* const newContent = new Container("./products.txt")

newContent.writeFile(products)

const main = async () => {
    
    await newContent.getAll()
    
    await newContent.getById(3)
    
    await newContent.deleteById(5)
    
    await newContent.saveObject("Botella de agua", 780, "https://dl.dropboxusercontent.com/s/ig08109teihkjv1/YerberaNegra.jpeg?dl=0")
   
    await newContent.deleteAll()

}

main() */

module.exports = Container