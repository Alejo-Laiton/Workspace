// Métodos mas utilizados con cadenas de caracteres
// Cómo obtener la longitud de un string
let str = "Hola_soy_un_string"
console.log(str.length)

// Otener partes de cadenas de caractes
// slice () substring() substr()
let slice_str = str.slice(5, 10) //No toma el número desde el que iniciamos hasta el idicamos al final
console.log(slice_str)

let substring_str = str.substring(5, 10) //Igual al anterior
console.log(substring_str)
    
let substr_str = str.substr(5, 10) //Toma desde una posición despues de la que le indicamos y arroja una cadena de longtud igual al segundo numero
console.log(substr_str)

// Reemplazar parte del contenido de una cadena de texto
let cadena = "Hola mi nombre es Juancho"
console.log (cadena) 

console.log(cadena.replace('Juancho','Alejo'))

let texto_largo = `Tito no es un mono cualquiera. A Tito no le gusta trepar por los árboles y odia 
comer plátanos. Él prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los árboles.`

// Al utilizar strings sólo reemplaza la primera instancia
console.log(texto_largo.replace(`los`, `cinco`))

// Al utilizar la expresión regular /string/g (global), reemplaza todas las instancias
console.log(texto_largo.replace(/los/g, 'cinco'))