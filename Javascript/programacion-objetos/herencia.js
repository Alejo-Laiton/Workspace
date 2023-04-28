// Inheritance - Herencia
class Persona {
    _nombre;
    _edad;

    constructor(nombre, edad ) {

        this._nombre = nombre;
        this._edad = edad;
        
    }
    saludo() {

        console.log(`Hola, mi nombre es ${this._nombre}, tengo ${this._edad} años.`)

    }
}

class Developer extends Persona {
    constructor(nombre, edad, lenguaje) {
        super(nombre, edad);
        this.lenguaje = lenguaje;
    }
    //Override
    // saludo() { 
    //     console.log('Hola soy Desarrollador')
    // }

    // Polimorfismo => Varias formas
    saludo(){
        super.saludo();
        console.log(`Y soy desarrollador de ${this.lenguaje}`)
    }
}
const nuevodev = new Developer("Gorka", 34, "JavaScript")
console.log(nuevodev)
nuevodev.saludo()

