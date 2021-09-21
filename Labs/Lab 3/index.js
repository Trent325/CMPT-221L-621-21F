// Null is when the value of a variable is not present, Undefined means the variable does not exist

//The 3 varaible types are numbers (ints, floats, longs), Strings (words), and Booleans (true or false).

let x = 0;
let y = 5;
console.log(x+y);

let word = "Word";
console.log("Word");

let answer = new Boolean(true);
console.log(answer);

for(let i = 0; i<10; i++){
    if(i%2 == 0){
        if(i%4 == 0){
            console.log("multiple of 4");
        }
        else{
            console.log("even")
        }
    }
    else{
        console.log("odd");
    }
}


for(let i = 0; i<7;i++){

    switch(i){
        case 0:
            console.log("0");
            break;
        case 1:
            console.log("1");
            break;
        case 2:
            console.log("2");
            break;
        case 3:
            console.log("3");
            break;
        case 4:
            console.log("4");
            break;
        case 5:
            console.log("5");
            break;
        case 6:
            console.log("6");
            

    }
}


for(let i = 0; i < 5; i++){
    console.log('hello');
}

let index = 0;

while(index < 3){
    console.log(index);
    index++;
}

const room = {type:"bathroom", color:"blue"};
console.log(room.type);

function addition(a, b){
    return a + b;
}

console.log(addition(x, y));