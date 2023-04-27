// Funciones tipo flecha - funciones anónimas 

const array = [1, 5, 6, 2, 7, 12, 8, 92]

const array2 = array.map(function(valor) {
    return valor * 2
})
console.log(array2)

const array3 = array.map((valor) => valor * 2)
console.log(array3)

// const dobleDelValor = valor => {
//     return valor * 2
// }

const dobleDelValor = valor => valor * 2

// Una función normal se puede llamar antes de inicializar
console.log(doble(6))

// Una función flecha se debe inicializar antes de ser llamada
console.log(dobleDelValor(6))

function doble(valor) {
    return valor * 2
}

const array4 = array.map(dobleDelValor)
console.log(array4)