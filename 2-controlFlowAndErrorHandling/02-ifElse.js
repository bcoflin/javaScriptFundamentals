// If else
var money = false;

if(money){
    console.log("STARBUCKS");
} else{
    console.log("Robin's coffee is fine.")
}
//
var name = "Brandon Coflin";    

if(name === "Brandon Coflin"){
    console.log("Hello my name is ", name);
} 
else{
    console.log("Hello, what is your name?")
}
//
var name = "brandon"


if(name == "brandon"){
    console.log("My name is " + name.charAt(0).toUpperCase() + name.substr(1).toLowerCase());
}else{
    console.log("Thats not my name");
}
//
var name = "lawRENce"
if(name == "Lawrence"){
    console.log("Lawrence", name);
}else{
    console.log();
}
//////////////////////////////////////////
var name = "branDon";

if(name[0]== name[0].toUpperCase){
    let firstLetter = name[0] + name.slic(1).toLowerCase();
    console.log("Hello my name is", firstLetter);
}else{
    let otherLetters = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    console.log("Hello my name is", otherLetters);
}
///////////////////////////////////////////
// Else If
var type = true;

if(typeof type === "string"){
    console.log(typeof type)
} else if (typeof type === "boolean"){
        console.log(typeof type)
  }else if (typeof type === "number"){
        console.log(typeof type);
    }else{
        console.log("Something Else");
    }

    var age = 23;
    if (age >= 25){
        console.log("Yay, you can rent a car")
    }else if (age >= 21){
        console.log("Yay, you can drink!")
    }else if(age >= 18){
        console.log("Yay, you can vote!")
    }else if(age <= 17){
        console.log("Sorry you cant do anything")
}