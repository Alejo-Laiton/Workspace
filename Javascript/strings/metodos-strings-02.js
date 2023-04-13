// Métodos de cadena de texto (parte 2)
let input = "EsCORpio"
let db = "escorpio"

// toLowerCase() - toUpperCase()

console.log(input.toLowerCase())
console.log(input.toUpperCase())
console.log(input.toLocaleLowerCase()) //igual a toLowerCase()
console.log(input.toLowerCase === db.toLowerCase)

// Formas de concatenar
let str_1 = "Hola soy la primera cadena."
let str_2 = "Hola soy la segunda cadena"

console.log(str_1.concat(" ", str_2))
console.log(str_1 + " " + str_2)
console.log(`${str_1} ${str_2}`)

// Eliminar espacios al inico y al final
let str_3 = "    Hola soy un string con espacios al final.   "
console.log(str_3.length)

// trim()
console.log(str_3.trim().length)
console.log(str_3.trimStart().length)
console.log(str_3.trimEnd().length)

// Obtener el caracter que en cierta posición
let str_4 = "Hola soy el string número 4" // ["H", "o", "l", "a", " ", "s"......]

console.log(str_4.charAt(5))
console.log(str_4[5])

// Obtener la posición de una palabra dentro de una cadena de caracteres
let str_5 = "Hola soy Alejo y me gustan los videojuegos. Alejo Mi nombre es Alejo y mi apellido es Laiton "
console.log(str_5.indexOf("Alejo"))
console.log(str_5.charAt(9))  
console.log(str_5.lastIndexOf("Alejo"))
