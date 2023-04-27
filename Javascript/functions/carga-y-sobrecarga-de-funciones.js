// Carga y sobrecarga de funciones
function saludar() {
    hola()
}

function hola() {
    console.log("Hola! Soy la función hola()")
}

saludar()

/// 1. global()
/// 2. saludar() globa()
/// 3. hola() saludar() global()
/// 4. saludar() global()
/// 5. global()

// Sobrecarga

// function recursivo() {
//     recursivo()
// }

// recursivo()
