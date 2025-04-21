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
        return `Product: ${this.name}, Price: $${this.price}, Quantity: ${this.quantity}`;
    }
}

//Part 2: Adding Inheritance
class PerishableProductProperties extends ProductProperties {
    constructor(name, price, quantity, expirationDate) {
        super(name, price, quantity)
        this.expirationDate = expirationDate;
    }
    toString() {
        return `Product: ${this.name}, Price: $${this.price}, Quantity: ${this.quantity}, Expiration Date: ${this.expirationDate}`;
    }
}

// two instances of PerishableProductProperties
let milk = new PerishableProductProperties("milk", 5.99, 2, "2025-05-01");
let sourcream = new PerishableProductProperties("sour cream", 2.50, 1, "2025-04-25")

console.log(milk.toString())
console.log(sourcream.toString())

//Part 3: Static Methods and Properties

//Part 4: Store Management

//Part 5: Testing the System