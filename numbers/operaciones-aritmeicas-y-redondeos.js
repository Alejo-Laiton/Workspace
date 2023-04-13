// Principales opraciones aritméticas
let a = 3.5;
let b = 4.8;

// Suma (+)
console.log(a + b);
// Resta (-)
console.log(a - b);
// Multiplicación (*)
console.log(a * b);
// División (/)
console.log(a / b);

// Representación de los números en cadenas de texto
console.log(typeof a)
let a_s = a.toString();

console.log(a_s);
console.log(typeof a_s)

// Redondeo de números decimales
let c = 3.3;
let d = c * 3;

console.log(d);
console.log(typeof d);
console.log(d.toFixed(4))
console.log(typeof d.toFixed(4));

// .toFixed -> Limitar el número de decimales al valor x
let e = 1839.123456789;
let f = 2213556153215;
console.log(e.toFixed(2));
console.log(f.toFixed(2));

// .toPricision(x) -> Limita el número de cifras signifcativas
console.log(e.toPrecision(7));
console.log(f.toPrecision(7));

console.log(typeof e.toPrecision(7))