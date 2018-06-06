// Ternaries

var x = 6;

if(x > 0 && x <= 10){
    console.log("yes");
}else if (x>10){
    console.log("maybe");
}else {
    console.log("no");
}

console.log((x > 0 && x <= 10)? "yes" : (x>10)? "maybe" : "no");




var age = 30
console.log((age>=25)? "Yay, you can rent a car!" : (age >=21)? "Yay, you can drink!" : (age >=18)? "Yay, you can vote!" : "Sorry, you cant do anything");