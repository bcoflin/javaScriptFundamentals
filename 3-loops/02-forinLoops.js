// For In Loops

var student = {
    name: "Sasan",
    awesome: true,
    cohort: "JavaScript",
    week: 1
}

for(let item in student){
    console.log(student[item]);
}

let studentName = "tYler";
let capName;

for ( var letter in studentName){
    if (letter == 0){
        capName = studentName[letter].toUpperCase();
    } else {
        capName += studentName[letter].toLowerCase();
    }
}

console.log(capName);