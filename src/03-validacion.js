// Función para validar email 
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Función para validar contraseña (mínimo 8 caracteres)
function validatePassword(password) {
  return password.length >= 8;
}

// Función para validar número positivo
function validatePositiveNumber(number) {
  return typeof number === "number" && number > 0;
}


// Uso
console.log("📧 Validar email:");
console.log("test@example.com:", validateEmail("test@example.com")); // true
console.log("mal-correo:", validateEmail("mal-correo")); // false

console.log("\n🔑 Validar contraseña:");
console.log("12345678:", validatePassword("12345678")); // true
console.log("1234:", validatePassword("1234")); // false

console.log("\n🔢 Validar número positivo:");
console.log("5:", validatePositiveNumber(5)); // true
console.log("-3:", validatePositiveNumber(-3)); // false
