//Spread operator ==    ... 

//                      Allows an iterable such as an
//                      array expression or string to be   
//                      expanded into serparate elements
//                      or a collection of elements
//                      (unpacks the elements)

let numbers = [1, 2, 3, 4, 5];

let maximum = Math.max(numbers); //returns NaN
maximum = Math.max(...numbers); //returns 5

let minimum = Math.min(numbers); //returns NaN
minimum = Math.min(...numbers); //returns 1

console.log(numbers);

let username = "Happy NZ";
let letters = [...username]; //splits the string into an array of letters
console.log(letters); //["H", "a", "p", "p", "y", " ", "N", "Z"]

letters = [...username].join("-"); //joins the array of letters into a string 
console.log(letters); //"H-a-p-p-y- -N-Z"

let fruits =["apple", "orange", "banana"];
let newFruits = [...fruits]; //creates a new array with the same items

console.log(fruits); //["apple", "orange", "banana"]
console.log(newFruits); //["apple", "orange", "banana"]

let vegetables = ["carrots", "celery", "potatoes"];

let produce = [...fruits, ...vegetables]; //combines the two arrays
console.log(produce); //["apple", "orange", "banana", "carrots", "celery", "potatoes"]