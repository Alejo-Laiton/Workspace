class Persona {
    // Private -> # (Solo se pueden acceder dentro de la clase)
    #nombre
    #edad
    
    // Protected -> _ ( Solo se puede dentro de la clase y desde clases descendientes)
    _isDeveloer = true

    constructor(nom, edad) {

        this.#nombre = nom;
        this.#edad = edad;

    }
    saludo() {
        console.log(`Hola, mi nombre es ${this.#nombre}, tengo ${this.#edad} años.`)

    }
    obtenNombre() { //Funcion getter -> permite acceder (de forma controlada) a un atributo protegido
        return this.#nombre;
        
    }
    #obtenEdad() {
        return this.#edad;
    }
    getEdad() {
        return this.#edad;
    }
    setEdad(nuevaEdad) {
        this.#edad = nuevaEdad;
    }
 }


const persona = new Persona("Alejo", 70)

// Atributos privados con #
console.log(persona)
console.log(persona.nombre)
// console.log(persona.#obtenEdad) Es un método privado
persona.saludo()
console.log(persona.obtenNombre())

// Getters -> métodos que permiten obtener atributos/métodos privados o protegidos
const edad = persona.getEdad()
console.log(edad)

// Setters -> métodos que nos permiten cambiar el valor de alguno de los atributos privados o protegidos
// Quiero cambiar la edad de la persona
persona.setEdad(34);
console.log(persona.getEdad())
