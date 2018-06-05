// Types

// Booleans
var bool = true;
console.log(typeof bool);

let noBool = false;
console.log(typeof noBool);

// Null
var empty = null;  //null = and empty value; and empty container waiting for information
console.log(empty);

// Undefined
let grass;      // Undefined is something that has not been defined yet...
console.log(grass);

// Numbers
var degrees = 90;
console.log('It is currently ${degrees} degrees.');

var precise = 99999999999;
console.log(precise);

var rounded = 99999999999;
console.log(rounded);

var notQuite = 0.2 + 0.1;
console.log(notQuite);

// Strings
let stringOne = "double quotes";
let stringTwo = 'single quotes';
console.log(stingOne, stringTwo);

// Numbers vs. Strings
let first = 1050 + 100;
let second = '1050' + '100';

console.log(typeof first);
console.log(typeof second);

let third = 1050 + '100';

console.log(third);
console.log(typeof third);


let firstName = 'Brandon';
let lastName = 'Coflin';
let houseNumber = 2249;
let aptNumber = 1;
let street = 'E. 151st';
let city = "Carmel";
let state = "Indiana";
let zipCode = 46033;

console.log(firstName, lastName);
console.log(houseNumber, street);
console.log(city, state, zipCode);


// Objects 

let burritoNow = {
    size: 'large',
    quantity: 4,
    now: true
};

console.log(burritoNow);
console.log(typeof burritoNow);

// Arrays
var burritos = ['large', 4, true];
console.log(burritos);