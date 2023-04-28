class Persona {

    // Propiedades 
    // Como estas son publicas no es necesario declararlas antes del constructor
    // nombre;
    // edad;
    // isDeveloper;

    // Métodos
    constructor(nombre, edad, isDeveloper) {

        this.nombre = nombre;
        this.edad = edad;
        this.isDeveloper = isDeveloper;

    }
    saludo() {

        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años.`)

    }
}

const nueva_persona = new Persona("Alejo", 26, true)
console.log(nueva_persona)
nueva_persona.saludo()

let numero = 60 // inicializar 
console.log(typeof numero)

let persona_2 = new Persona("Maria", 34, false) // Instanciar
console.log(typeof persona_2)
console.log(persona_2 instanceof Persona) // Herencia

// Instanceof -> similar a typeof pero para clases
