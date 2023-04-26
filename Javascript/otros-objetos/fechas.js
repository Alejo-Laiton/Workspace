// Trabajando con fechas
const fecha = new Date()

console.log(fecha)

// Atención - Los meses inicializan en 0 (0 - Enero, 11 - Diciembre)
const fecha2 = new Date(1987, 10, 20, 1, 23, 52, 192)

console.log(fecha2)

const fecha3 = new Date(1000000000000)
console.log(fecha3)
const fecha4 = new Date(-1000000000000)
console.log(fecha4)

const fecha5 = new Date("October 13, 1979 12:15:15")
console.log(fecha5)

console.log(fecha > fecha2)
console.log(fecha < fecha2)

const fecha6 = new Date(1987, 10, 20, 1, 23, 52, 192)
console.log(fecha6)

//ERROR - No se pueden comparar asi
console.log(fecha2 === fecha6) 

//OK - Esta es la forma de comparar la igualdad entre fechas
console.log(fecha2.getTime() === fecha6.getTime())

// Obtener el día, el mes y el añi de una fecha

// Obtener el día .getDate() 
console.log(fecha2.getDate())

// Obtener el mes .getMonth() (0 - Enero, 11 - Diciembre)
console.log(fecha2.getMonth() + 1)

// Obtener el año .getFullYear()
console.log(fecha2.getFullYear())

console.log(fecha2)

//.toLocaleDateString
// https:developer.mozilla.org/es/dics/web/JavaScript/Referece/Global_Objects/Date/toLocaleDateString
console.log(fecha2.toLocaleDateString("en-US"))
console.log(fecha2.toLocaleDateString("en-Gb"))