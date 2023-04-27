// Qué son las funciones, cómo se declaran y cómo se utilizan

const nom = "Alejo";

// saludar ("Alejo")
saludar(nom)

function saludar(nombre){
    console.log(`Hola ${nombre}`)
}
///

let nombre_2 = "Juan";
console.log(nombre_2)

despedir(nombre_2);

// Cuando es un paso por valor no se altera la variable original
console.log(nombre_2)

function despedir(nombre) {
    nombre = "Diego"; // Variable no alterada
    console.log(`Adiós ${nombre}`)
}

////

let persona = { nombre: "Juan", apellido: "González"}

saludarPersona(persona);

// Cuando es un paso por referencia, se altera el objeto original
// En Js los objetos se manejan por referencia
console.log(persona)

function saludarPersona(objeto) {
    objeto.apellido = "Villar"; // Propiedad alterada
    console.log(`Hola ${objeto.nombre} ${objeto.apellido}`)
}

////

function imprimeNumero(numero = 7) { //Párametros por defecto
    console.log(numero)
}

imprimeNumero()

////

function imprimir(...parametros) {
    console.log(parametros)
}

imprimir(1, 3, 9, 2, "Hola", {id:5})

////

function suma(...nums) {
    return nums.reduce((a, b) => a + b)
}

const s = suma(1, 2, 3, 4, 9, 15)
console.log(s)
