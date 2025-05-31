"use strict";
class Product {
    static productCount = 0;
    id;
    name;
    price;
    constructor(name, price) {
        if (name.length === 0) {
            throw new Error("Name must contain at least 1 character");
        }
        if (price <= 0) {
            throw new Error("Price must be positive");
        }
        this.name = name;
        this.price = price;
        this.id = Product.productCount + 1;
        Product.productCount++;
    }
    getDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Price: $${this.price}`;
    }
    static getProductCount() {
        return Product.productCount;
    }
}
class Inventory {
    products = [];
    addProduct(product) {
        this.products.push(product);
    }
    listProducts() {
        let result = "";
        for (const product of this.products) {
            result += product.getDetails() + "\n";
        }
        result += `Total products created: ${Product.getProductCount()}`;
        return result;
    }
}
const inventory = new Inventory();
const product1 = new Product("Laptop", 1200);
const product2 = new Product("Phone", 800);
inventory.addProduct(product1);
inventory.addProduct(product2);
console.log(inventory.listProducts());
// Product.productCount = 10;
// const product = new Product("", 800);
// const product2 = new Product("Phone", 0);
// product.id = 5;
//# sourceMappingURL=13.js.map