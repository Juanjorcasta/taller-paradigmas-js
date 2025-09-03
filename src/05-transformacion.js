const users = [
  { id: 1, name: "Ana", age: 20 },
  { id: 2, name: "Carlos", age: 22 },
  { id: 3, name: "María", age: 19 },
  { id: 4, name: "Luis", age: 21 }
];

// 1. Transformar usuarios agregando isAdult
const transformedUsers = users.map(u => ({
  ...u,
  isAdult: u.age >= 18
}));

// 2. Contar adultos y no adultos con reduce
const stats = transformedUsers.reduce(
  (acc, u) => {
    if (u.isAdult) acc.adults++;
    else acc.minors++;
    return acc;
  },
  { adults: 0, minors: 0 }
);

// Mostrar resultados
console.log("👥 Usuarios transformados:", transformedUsers);
console.log("📊 Estadísticas:", stats);
