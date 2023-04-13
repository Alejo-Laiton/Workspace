// Sección 4 - Strings (cadenas de caracteres)
let str_dbl ="Hola soy un texto con comillas dobles";
let str_sng ='Hola soy un texto con comillas simples';

console.log(str_dbl);
console.log(str_dbl);

let str_comillas = "El otro día me dijo literalmente \"ve a sacar la basura\" "
let str_comillas_simples = 'El otro día me dijo literalmente "ve a sacar la basura" '
let str_comillas_dobles = "El otro día me dijo literalmente 've a sacar la basura' "
let str_comillas_simples_2 = 'El otro día me dijo literalmente \'ve a sacar la basura\' ' 

console.log(str_comillas)
console.log(str_comillas_simples)
console.log(str_comillas_dobles)
console.log(str_comillas_simples_2)

// Comillas invertidas (backticks)
let str_backticks = `Hola esto es un string con backicks`

console.log(str_backticks)

let nombre = "Alejo"
let saludo = `Hola, ${nombre} bienvenido`

console.log(saludo)

// Plantilla HTML
let plantilla = `
<html>
    <h1>Página web de ${nombre}</h1>
    <p>Este es un parrafo</p>
</html>
`
console.log(plantilla)