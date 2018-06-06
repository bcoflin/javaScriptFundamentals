// Arrow Functions

// Standard
function laptop(){
    console.log("Sasan's laptop is about to explode")}

laptopt();

// Fat Arrow function
let laptop = () => {
    console.log("Sasan's laptop is about to explode");
}

laptop();

// With parameters
var cats = (fleas, ticks) => {
    console.log("Cats have " + fleas + " and " + ticks);
}

cats("fleas", "ticks");

var turtle = shell => {
    console.log("Turtles have " + shell);
}

turtle("shells");

// Concise Bodies
let apples = x => console.log(`There are ${x} apples.`);

apples(20);

// Block Bodies
let apples = (x) => {console.log(`There are ${x} apples.`);}

apples(7);

// Line breaks are bad
//GOOD
let func = () => console.log('hi'); // OK
//BAD
let func = () 
=> console.log('hi'); // not OK

