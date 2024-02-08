//Logical operators = used to combine or manipulate boolean values (true or false)

//                  && = and
//                  || = or
//                  ! = not

const temp = 20;

if (temp > 0 && temp < 30) {
    console.log('The temperature is good');
} else{
    console.log('The temperature is bad');
}

if (temp <= 0 || temp > 30) {
    console.log('The temperature is bad');
} else{
    console.log('The temperature is good');
}

const isSunny = true;

if(!isSunny){
    console.log("You don't need sunglasses");
} else {
    console.log("It's sunny, you need sunglasses");
}