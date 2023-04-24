// Cómo obtener una lista a partir de otra .slice()
const array = ["hola", 1, 2, 3, null, "adios"]

// NO MODIFICA EL VALOR DEL ARRAY ORIGINAL

// Si no se le pone ningun valor tomara todo el array
// Si no se le pone el segundo valor tomara todo el array a partir del promer valor
console.log(array.slice(1))
// Si se le pone segundo indice no tomara el valor de ese indice
console.log(array.slice(3,5))

// Los indices negativos toman valores a partir del ultimo array
const array2 = array.slice(1, -2)
console.log(array2)
