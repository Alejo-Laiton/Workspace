// Funciones asíncronas

function miAsinc(){
    // Hace una llamada a una base de datos externa
    // Puede darnos algun error
}

// Estructura número aleatorio
// Math.floor(Math.random() * (max - min)) + min;

const miPromesa = new Promise((resolve, reject) => {
    const i = Math.floor(Math.random() * 2)
    console.log(i)
    // Si está todo correcto
    if (i !== 0) {
        resolve()
    } else {
        reject()
    }
})

miPromesa
    .then(() => console.log("Se ha ejecutado de forma correcta"))
    .catch(() => console.log("ERROR"))
    .finally(() => console.log("Yo me jecuto siempre"))
