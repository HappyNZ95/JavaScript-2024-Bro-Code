//String methods = allow you to manipulate and work with text (strings)

let userName = "HappyNZ";

userName.charAt(0);
userName.indexOf("p");

console.log(userName.charAt(0)); //H
console.log(userName.indexOf("p")); //2
console.log(userName.lastIndexOf("p")); //3
console.log(userName.length); //7

userName = "HappyNZ   "
console.log(userName.trim()); //HappyNZ
userName = userName.trim();

console.log(userName.toUpperCase()); //HAPPYNZ
console.log(userName.toLowerCase()); //happynz
console.log(userName.replace("Happy", "Sad")); //SadNZ
console.log(userName.repeat(3)); //HappyNZHappyNZHappyNZ

let result = userName.startsWith(" ");
console.log(result); //false

if (result) {
    console.log("The string starts with a space");
} else {
    console.log(userName);
}

result = userName.endsWith("Z");
console.log(result); //true

let phoneNumber ="123-456-7890";

console.log(phoneNumber.replaceAll("-", ""));//1234567890

phoneNumber = phoneNumber.padStart(20, "0"); //padding the string with 0s until it reaches 20 characters
console.log(phoneNumber);