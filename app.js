

// Language: javascript


// Parámetros  (1hr:48min)
console.log('------------- Parámetros -------------');
function greeting1(personName){
    console.log(personName);
    console.log('Hello');
    console.log('Hello '+ personName);

}
greeting1('Markus');
greeting1('Fabricio');
greeting1('Ezio');



// Funciones  (1hr:44min)
console.log('------------- Funciones -------------');

function greeting(){
    console.log('Hello de la función greeting');
}
greeting();

//Arrow functions   
let hello= () => {
    return console.log('Hello arrow functions');
} 
hello();

console.log('pasando la función hello por console.log   ', hello);
// console.log('pasando la función hello por console.log   ', hello());

//------ otro ejemplo arrow function
let sum = (a, b) => a + b;

/* This arrow function is a shorter form of:

let sum = function(a, b) {
  return a + b;
};
*/

console.log('Resultado arrow function ejemplo:', sum(1, 2) ); // 3


// Funciones anónimas ...

// Arreglos  (1hr:34min)
console.log('------------- Arreglos -------------');


let names=['ryan','joe','john','mario'];
console.log(names[0])
console.log(names[3])
console.log('longitud del arreglo o array', names.length)



// Bucles o Iteradores
// error típico en los bucles son los bucles infinitos!
console.log('------------- Bucles o Iteradores -------------');

// while (condicion) {}
let count=50;
while(count>0){
    console.log('Hello World');
    count=count-1;
}

count=5;
while(count>0){
    console.log(count);
    count=count-1;
}

//count=0;
while(count<5){
    console.log(count);
    count ++;
}

// do {} while (condicion) {}


// for (inicializacion; condicion; incremento) {}    (1hr:38min)

for(let i=0; i<names.length; i++){  //utilizo names, el arreglo de la línea donde se explica arreglos arriba
    console.log(names[i])
}

for(let i=names.length - 1; i>=0; i--){  
    console.log(names[i])
}

// Condicionales, control de flujo  (1hr:10min)
console.log('------------- Condicionales -------------');
// if (condicion) {}
let passwordDB = 'pepe123'
let input = 'asdasdasdasd'
let result = input == passwordDB;
// se puede escribir así porque la posible solución simplemente puede tener dos estados: true o false
if (result === true) {
    console.log('Login Correcto');
}
if (result === false) {
    console.log('Login Incorrecto');
}
// else if (condicion) {}   o ingresa en el if o ingresa en el else if, si no se muestra uno de ellos se muestra el else
let score = 70;
if (score > 30) {
    console.log('You need to practice more');
} else if (score > 15) {
    console.log('Estas mejorando');
}
else {
    console.log('You need to follow this tutorial');
}

// else {}
let passwordDB1 = 'pepe123'
let input1 = 'pepe123'
9
let result2 = input1 == passwordDB1;
if (result2 == true) {
    console.log('Login Correcto');
} else {
    console.log('Contraseña incorrecta');
}

// switch (condicion) {}
let typeCard = 'Debit Card';
switch (typeCard) {
    case 'Debit Card':
        console.log('This is a debit card');
        break; // para que no se ejecute el resto de las opciones 
    case 'Credit Card':
        console.log('This is a credit card');
        break;
    default:
        console.log('No Card');
}

// Operadores  (1hr:02)
console.log('------------- Operadores -------------');
// + - * / %
// == != === !== > < >= <=
// el símbolo + también se utiliza para concatenar cadenas de texto
let numberOne = 100;
let numberTwo = 500;
let result1 = numberOne > numberTwo;
console.log(result1);



// B- variables  (43:30)
console.log('------------- B - variables -------------');
// var, let const. Alcance, scope, block scope, bloques de codigo
/* no pueden empezar con numeros o caracteres especiales, 
si contiene espacios, no es valido. Sí puede empezar con _ (underscore) o $ (dollar) */
//43:31 seguir mañana
var userName = 'Juan';
var userAge = 20;
let userName2 = 'Juan';
let userAge2 = 20;
console.log('El nombre del usuario es', userName);
var userName = 'Pepe';
console.log('El nombre del usuario es', userName);
const pi = 3.1416;
console.log('valor pi:', pi);




// A- tipos de datos  (27:25)
console.log('------------- A - tipos de datos -------------');
// 1- string
"Hello world";
'Hello world';
// 2- number, integer, float, double, boolean, null, undefined
console.log(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 1.10);
console.log(true, false);
console.log(null, undefined);
console.log(typeof (1));
console.log(typeof (1.1));
console.log(typeof (true));


// 3- array
const arrayString = ['joe', 'ryan', 'martha'];
const arrayNumbers = [1, 2, 3, 4];
console.log('arrayString', arrayString);
console.log('arrayNumbers', arrayNumbers);
console.log(['joe', 'ryan', 'martha']);
console.log([1, 2, 3, 4]);
document.write(arrayString);

// 4- object  (34:39)  formado por pares clave, valor.
const user1 = { "name": 'joe', "age": 25, "country": 'USA', "isMarried": false, "score": 7.5, isActive: true, isAdmin: false, "isLogged": true, "friends": ['maria', 'lina'] };
console.log('user1', user1);
console.log('user1', { "name": 'joe', "age": 25, "country": 'USA', "isMarried": false, "score": 7.5, isActive: true, isAdmin: false, "isLogged": true, "friends": ['maria', 'lina'] });


// comenzando el curso de javascript
console.log('------------- comenzando el curso de js -------------');
document.write('<h1>Hello World en js</h1>');
console.error('Mi error custom desde archivo app.js');
console.log('Hello word en consola');
document.write('abrir el inspector de chrome para ver el resultado por consola');
alert('abrir el inspector de chrome para ver el resultado por consola');