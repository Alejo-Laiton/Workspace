// Se puede crear uno a uno el objeto, pero es muy tedioso
const persona = {
    nombre: "Alejo",
    edad: 26,
    isDeveloper: true,
    saludo: function() {
        console.log('Hola')
    }
}

// Podemos usar una function factory

const creaPersona = (nombre, edad, isDeveloper) => {
    return {
        nombre, // esto es igual a tener nombre: nombre
        edad,
        isDeveloper,
        saludo: function() {
            console.log('Hello')
        }
    }
}

const nueva_persona = creaPersona("Juan", 26, true)
console.log(nueva_persona)

const nueva_persona2 = creaPersona("Brayan", 34, false)
console.log(nueva_persona2)
