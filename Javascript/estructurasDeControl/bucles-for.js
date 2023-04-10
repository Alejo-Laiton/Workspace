// Bucles for

/*for (inicializacion; condicion; actualizacion){
    // Esto es el bucle
}*/
/* sumar 1 a una variable

i = i + 1; i = i + 2
i += 1     i += 2
i++   
*/

for (let i = 0; i < 10; i++){
    // Esto es el bucle
    console.log(i)
}

let lista = [1, 4, 6, 2, 3, 7, 10, 12];
for (let i = 0; i < lista.length; i++){
    console.log(lista[i]*2)
}

// Estructura for...of

for (let valor of lista) {
    console.log(valor)
}

// Estructura forEach

lista.forEach(valor => {
    console.log(valor)
})

// Estructura for...in
let persona = {
    nombre: "Alejo",
    apellido: "Laiton",
    edad: 26,
    isDeveloper: true
}
console.log(persona.nombre)

let prop = "edad";
console.log(persona[prop])

for (let propiedad in persona) {
    console.log(propiedad);
    console.log(persona[propiedad])
}