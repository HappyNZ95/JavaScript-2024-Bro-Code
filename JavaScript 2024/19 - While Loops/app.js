// while loop = repeat some code WHILE a condition is true

let username ="";

while(username === "" || username === null) {
    username = window.prompt("Enter your name");
} 

    console.log(`Hello ${username}`);
    username = "";

do {
    username = window.prompt("Enter your name");
} while(username === "" || username === null);

    console.log(`Hello ${username}`);


let loggedIn = false;
let userName;
let password;

    do {
        userName = window.prompt("Enter your username");
        password = window.prompt("Enter your password");

        if(userName === "myUserName" && password === "myPassword") {
            loggedIn = true;
            console.log("You are logged in");
        } else {
            console.log("Incorrect username and password");
        }
    } while(!loggedIn);