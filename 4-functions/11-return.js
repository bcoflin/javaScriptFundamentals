// Return

function capitalizeName(name){
    let capName = "";
    for (let l in name) {
        if(l == 0){
            capName += name[l].toUpperCase();
        } else {
            capName += name[l].toLowerCase();
        }
    }
    //console.log(capName);
    return capName;
}

const newName = capitalizeName("branDON");

console.log(newName + ", how are you today");

// challenge: maket a tip calculator using a function
// have it return the value
// capture that returned value in a variable
// print that variable

function tipAmount(orderTotal, tipPerc) {
    let netTotal = orderTotal * tipPerc
    return netTotal.toFixed(2);
}
    let tip = tipAmount(19.95, 0.2);
    console.log(tip);


