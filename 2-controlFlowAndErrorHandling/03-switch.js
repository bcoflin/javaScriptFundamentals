// Switch

var friend = "Tyler";

switch (friend) {
    case "Aaron":
    console.log("Hey Aaron, when are we going rock climbing?");
    //break;
    case "Kenn":
    console.log("Hey Kenn, wanna play Catan?");
    //break;
    case "Carolyn":
    console.log("Hey Carolyn, when are we plaing DnD?");
    //break;
    default:
    console.log(`Im sorry, ${friend}, but do I know you?`);
}

var dessert = "Cake";

switch(dessert){
    case "Pie":
        console.log("Pie, pie, me oh my!");
        break;
    case "Cake":
        console.log("Cake is great!");
        break;
    case "Ie Cream":
        console.log("I scream for ice cream!");
        break;
    default:
        console.log(`I'm sorry, ${dessert}, is not on the menu`);
}

var yep = -8;

switch(true){
    case(yep < 0 && yep > -10):
    console.log("worked");
    break;
    case(yep > 0):
    console.log("also worked");
    break;
    default:
    console.log("didnt work");
}