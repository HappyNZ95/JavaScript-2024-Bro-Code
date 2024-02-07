//String slicing = creating a substring from a portion of another string

                                            //string.slice(start, end)

const fullName = "Happy New Zealand";

let firstName = fullName.slice(0, 5);
let middleName = fullName.slice(6, 9);
let lastName = fullName.slice(10, 17);

console.log(firstName); //Happy
console.log(middleName); //New
console.log(lastName); //Zealand

let firstChar = fullName.slice(0, 1);
let lastChar = fullName.slice(-1);
console.log(firstChar); //H
console.log(lastChar); //d

firstName = fullName.slice(0, fullName.indexOf(" "));
lastName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(firstName); //Happy
console.log(lastName); //New Zealand

const email = "happynz@gmail.com";

let username = email.slice(0, email.indexOf("@"));
console.log(username); //happynz

let extension = email.slice(email.indexOf("@") + 1);
console.log(extension); //gmail.com