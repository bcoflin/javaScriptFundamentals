// Functions

// Declarations

var s;
let m;
const r;

function hi(); //hoisted

// Expressions
var hi= function hello(){};  //not hoisted

// Calling Functions

function coffeeCup(){
    console.log("I like coffee");
}

coffeeCup();

let x = 10;
let y = 20;

function math(){
    console.log(x + y)
}

math();