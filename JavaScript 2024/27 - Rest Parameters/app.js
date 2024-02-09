// rest parameters = (...rest) allows a function to work with a 
// variable number of arguments by bundling them into an array

// Spread = expands an array into separate elements
// Rest = gathers separate elements into an array

function openFridge(...foods) {
    
    console.log(foods); //logs an array of all the foods
    console.log(...foods); //logs each food separately using spread
}

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";

openFridge(food1, food2, food3, food4, food5);
//Function is designed to take in any number of arguments

function getFood(...foods) {
   
    return foods; 
}

const foods = getFood(food1, food2, food3, food4, food5);
console.log(foods); //logs an array of all the foods

function sum(...numbers) { //rest parameter
    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result;
}

const total = sum(12, 14, 312, 43);
console.log(`Your total is $${total}.00`); //logs 12381

function getAverage(...numbers) { //rest parameter
    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result / numbers;
}

const total2 = getAverage(75, 100, 85, 90, 50);
console.log(`Your average is ${total2}.`); //logs 80

function combineStrings(...strings) { //rest parameter
    return strings.join(" ");

}

const fullName = combineStrings("Mr.", "Spongebob", "Squarepants", "III");
console.log(fullName); //logs Mr. Spongebob Squarepants III