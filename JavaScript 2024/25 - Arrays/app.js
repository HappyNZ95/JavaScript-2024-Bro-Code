//Array = a variable like structure that can hold more than one value at a time

let fruits = ["apple", "orange", "banana", "grape", "kiwi"];

fruits[4] = "coconut";

fruits.push("coconut"); //adds to the end of the array
fruits.pop(); //removes the last item in the array
fruits.unshift("mango"); //adds to the beginning of the array
fruits.shift(); //removes the first item in the array


console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits[4]);

let numOfFruits = fruits.length;
let index = fruits.indexOf("banana"); //returns the index of the item in the array

if (index === -1) { //if the item is not found in the array, the index will be -1
    console.log("Item not found");
} else {
    console.log("Item found at index: " + index);
}

console.log(numOfFruits); 

for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
} //loops through the array and prints each item

for(let fruit of fruits) {
    console.log(fruit);
} //loops through the array and prints each item

for(let i = fruits.length -1; i >= 0; i--) {
    console.log(fruits[i]);
} //loops through the array in reverse and prints each item

fruits.sort(); //sorts the array in alphabetical order
fruits.sort().reverse(); //sorts the array in reverse alphabetical order