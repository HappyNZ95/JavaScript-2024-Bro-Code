// function - A section of reusable code.
// Declare code one, use it many times.
// Call the function to execute the code.

function happyBirthday(username, age) {
    console.log("Happy Birthday to you!");
    console.log("Happy Birthday to you!");
    console.log(`Happy Birthday dear ${username}!`);
    console.log("Happy Birthday to you!");
    console.log(`You are ${age} years old!`);

}

happyBirthday("HappyNZ", 29);
happyBirthday("Spongebob", 30);
happyBirthday("Patrick", 37);

function add(x, y) {
    return x+y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}
console.log(divide(2, 3));

function isEven(number) {
    return number %2 === 0 ? true: false;
}
console.log(isEven(10)); // true
console.log(isEven(11)); // false

function isValidEmail(email) {
    return email.includes("@") ? true : false;
}

console.log(isValidEmail("Bro@fake.com")) // true