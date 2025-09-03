// Clase Product
class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  // Método para calcular el subtotal de este producto
  getSubtotal() {
    return this.price * this.quantity;
  }
}

// Clase ShoppingCart
class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  getTotal() {
    return this.products.reduce((acc, p) => acc + p.getSubtotal(), 0);
  }

  showProducts() {
    console.log("🛒 Productos en el carrito:");
    this.products.forEach(p => {
      console.log(`- ${p.name} | Precio: $${p.price} | Cantidad: ${p.quantity} | Subtotal: $${p.getSubtotal()}`);
    });
  }
}

// -----------------------------
// Ejemplo de uso:
const cart = new ShoppingCart();

const p1 = new Product("Manzanas", 2, 5);
const p2 = new Product("Leche", 4, 2);
const p3 = new Product("Pan", 1.5, 3);

cart.addProduct(p1);
cart.addProduct(p2);
cart.addProduct(p3);

cart.showProducts();
console.log("💰 Total:", cart.getTotal());
