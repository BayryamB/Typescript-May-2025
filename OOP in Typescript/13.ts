class Product {
    private static productCount = 0;
    public readonly id: number;
    public name: string;
    public price: number;

    constructor(name: string, price: number) {
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

    getDetails(): string {
        return `ID: ${this.id}, Name: ${this.name}, Price: $${this.price}`;
    }

    static getProductCount(): number {
        return Product.productCount;
    }
}

class Inventory {
    private products: Product[] = [];

    addProduct(product: Product): void {
        this.products.push(product);
    }

    listProducts(): string {
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
