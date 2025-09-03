const products = [
  { name: "Laptop", price: 1200, category: "Electronics" },
  { name: "Phone", price: 800, category: "Electronics" },
  { name: "Shirt", price: 40, category: "Clothing" },
  { name: "Pants", price: 50, category: "Clothing" },
  { name: "Headphones", price: 100, category: "Electronics" }
];

// 1. Filtrar productos por categoría
const electronics = products.filter(p => p.category === "Electronics");

// 2. Obtener nombres de los productos
const productNames = products.map(p => p.name);

// 3. Calcular precio total
const totalPrice = products.reduce((acc, p) => acc + p.price, 0);


// Mostrar resultados
console.log("🔌 Electrónica:", electronics);
console.log("📦 Nombres:", productNames);
console.log("💰 Precio total:", totalPrice);
