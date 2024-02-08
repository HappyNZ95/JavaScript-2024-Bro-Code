//NUMBER GUESSING GAME

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum) + minNum);

let attempts = 0;
let guess;
let running = true;

while (running) {

guess = window.prompt(`Guess a number between ${minNum} and ${maxNum}`);
guess = Number(guess);

if(isNaN(guess)) {
    window.alert('You must enter a number');
}

else if (guess < minNum || guess > maxNum) {
    window.alert(`Please enter a number between ${minNum} and ${maxNum}`);
} else {
    attempts++;
    if (guess < answer) {
        window.alert('Too low');
    } else if (guess > answer) {
        window.alert('Too high');
    } else {
        window.alert(`Correct! You got it in ${attempts} attempts`);
        running = false;
    }
}

}