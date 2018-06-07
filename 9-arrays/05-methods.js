// Arrays

let x = [];

console.log(typeof x);


//
let student = ['Tyler', 'Sasan', 'Brandon', 'Lawrence', 'Rajni', 'Sherri', 'David'];

console.log(student[4]);

let cohort = ["Lawrence", 35, true, ["Brandon", 4, "Sherri"], 6, false];

console.log("Hello ", cohort[3][2], "you look nice today");

// Populating/Referring

let food = ["hamburger", "chicken", "steak", "burrito", "bbq"];

//for (f in food) {
//console.log(f);
//console.log(food[f]);

food.push("pizza");
food.splice(2, 1, "hamburger helper"); // .splice(position, how many to delete, what to add in that location)
food.splice(3,0,"pecan Pie"); // adding to the list where you want to.
food.pop();

for (f in food) {
    console.log(food[f]);
}

// Iterating

let food = ["hamburger", "chicken", "steak", "burrito", "bbq"];

//food.forEach(f => console.log(` ${f} is on the menu today.`));

food.forEach((value, number) => {console.log(number, value)})

let movie = ["Fight Club", "Super 8", "Avengers", "Ragnarok", "Solo"];

movie.push("Rogue One");
movie.forEach(m => console.log(m))