//for loop = repeat some code a LIMITED amount of times

for (let i =1; i <= 20; i++) {
    
    if(i == 13) {
        break; //stop the loop
        continue; //skip the rest of the code and go to the next iteration
    } else {
        console.log(i);
    }
}