// For Loops

for(i =0; i<10; i++){
    console.log(i);
}


for(i=0; i < 20; i +=2){
    console.log(i);
}

for(i = 10; i>=0; i--){
    console.log(i);
}

for(i=0; i>=-24; i-=2){
    console.log(i);
}

let name = "Kenn";

for(i = 0; i <= 3; i++){
        console.log(name[i]);
}

let total = 0;

for (n = 1; n < 51; n++){
    total += n;
}

console.log(total);

function fizzBuzz(){
    for(let i = 0; i <= 100; i++){
        if(i%3 == 0 && i%5==0){
            console.log("Fizz Buzz");
       }else if (i%3==0){
            console.log("Fizz");
        }else if (i%5==0){
            console.log("Buzz");
        }else {
            console.log(i);
        }
    }
}

fizzBuzz(11); 