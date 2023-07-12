class ProductManager {
    constructor () {
        this.products =[];
        this.nextId = 1;
    }
    static id = 0;

    addProduct(title, description, price, thumbnail, code, stock) {
        const existingProduct = this.products.find((item) => item.code === code);
        if (existingProduct) {
            console.log(`El código del producto ya existe`);
        }
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.log(`Todos los campos son obligatorios`);
            return;
        }
        const product = {id: this.nextId++, title, description, price, thumbnail, code, stock}
        this.products.push(product);
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find((item) => item.id === id);
        if (!product) {
            console.log(`“Not found” El producto con el id ${id} no existe`);
        return;
    }
    console.log(`El producto con el id ${id} fue encontrado`);
    return product;
    }
}

const products = new ProductManager;

products.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25)
console.log(products.getProducts());

// products.addProduct('titulo1', 'descripcion1', 350, 'imagen1', 'abc123', 2);
// products.addProduct('titulo1', 'descripcion1', 350, 'imagen1', 'abc123', 2);
// console.log(products.getProducts());

products.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);
products.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);
products.getProductById(4);
products.getProductById(2);
console.log(products.getProducts());