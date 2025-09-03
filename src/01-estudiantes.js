const students = [
  { id: 1, name: "Ana", age: 20, grade: 85, course: "JavaScript" },
  { id: 2, name: "Carlos", age: 22, grade: 92, course: "Python" },
  { id: 3, name: "María", age: 19, grade: 78, course: "JavaScript" },
  { id: 4, name: "Luis", age: 21, grade: 88, course: "Java" },
  { id: 5, name: "Sofía", age: 20, grade: 95, course: "JavaScript" }
];

// 1. Estudiantes de Js con nota > 80
const jsHighGrades = students.filter(s => s.course === "JavaScript" && s.grade > 80);

// 2. Promedio de notas
const averageGrade = students.reduce((acc, s) => acc + s.grade, 0) / students.length;

// 3. Nombres de estudiantes mayores de 20 años
const namesOver20 = students.filter(s => s.age > 20).map(s => s.name);

// 4. Estudiante con la nota más alta
const topStudent = students.reduce((max, s) => (s.grade > max.grade ? s : max), students[0]);

// Mostrar resultados
console.log("📘 Estudiantes JS con nota > 80:", jsHighGrades);
console.log("📊 Promedio de notas:", averageGrade.toFixed(2));
console.log("👥 Nombres de mayores de 20:", namesOver20);
console.log("🥇 Estudiante con mejor nota:", topStudent);
