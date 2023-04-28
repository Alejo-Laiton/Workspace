// Formas de importar/exportar módulos
// 1. CommonJs - require
// 2. Import ES6 - import


// Se puede declarar de varias formas las funciones importadas de modulos externos


// Forma 1

// const moduloMatematicas = ("./modulos/matematicas.js")
// const fact = moduloMatematicas.factorial(5);
// console.log(fact)

// const sum = moduloMatematicas.suma(12, 90);
// console.log(sum)


// Forma 2

// const moduloMatematicas = ("./modulos/matematicas.js")
// const factorial = moduloMatematicas.factorial()
// const suma = moduloMatematicas.suma()

// const fact = factorial(5)
// console.log(fact)

// const sum = suma(12, 90)
// console.log(sum)


// Forma 3

// const moduloMatematicas = require("./modulos/matematicas.js")
// const { factorial, suma } = moduloMatematicas;

// const fact = factorial(5)
// console.log(fact)

// const sum = suma(12, 90)
// console.log(sum)


// Forma 4

const { factorial, suma } = require("./modulos/matematicas.js")

const fact = factorial(5)
console.log(fact)

const sum = suma(12, 90)
console.log(sum)
