//Part 1: setting up classes
class ProductProperties {

    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    getTotalPrice() {
        return this.price * this.quantity;
    }

    toString() {
        return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}`;
    }

    static applyDiscount(products, discount) {
        products.forEach(product => {
            product.price -= product.price * (discount / 100);
        });
    }
}

//Part 2: Adding Inheritance
class PerishableProductProperties extends ProductProperties {
    constructor(name, price, quantity, expirationDate) {
        super(name, price, quantity)
        this.expirationDate = expirationDate;
    }
    toString() {
        return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}, Expiration Date: ${this.expirationDate}`;
    }
}

// two instances of PerishableProductProperties
let milk = new PerishableProductProperties("milk", 6, 2, "2025-05-01");
let sourcream = new PerishableProductProperties("sour cream", 2.50, 1, "2025-04-25")

console.log(milk.toString())
console.log(sourcream.toString())

//Part 3: Static Methods and Properties
console.log(ProductProperties.applyDiscount([milk,sourcream], 10)); // Apply a 10% discount to all products`
console.log(milk.toString())
console.log(sourcream.toString())

//Part 4: Store Management

//Part 5: Testing the System