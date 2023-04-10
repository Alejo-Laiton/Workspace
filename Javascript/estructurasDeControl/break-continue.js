// Casos muy específicos - break, continue --- excepcionales
let lista = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < lista.length; i++) {

    if (lista[i] === 3) {
        continue;
    }
    var j = 50;
    const k = 100;

    console.log(lista[i]);

    if(lista[i] > 5) {
        break;
    }
}

// Cual es el ambito del bucle
console.log(j);
console.log(i); // no esta declarada porque solo está definida dentro del bucle for. 
console.log(k); // const solo está definida dentro del bucle.