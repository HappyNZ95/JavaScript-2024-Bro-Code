//  =   Assignment operation
//  ==  Comparison operation
//  === Strict comparison operation (compare if values & data types are equal)
//  !=  Inequality operator
//  !== Strict inequality operator (compare if values & data types are not equal)

const PI = 3.14;

// ==  Comparison operation
if(PI == "3.14"){
    console.log("That is Pi");
} else {
    console.log("That is NOT Pi");
}

// === Strict comparison operation (compare if values & data types are equal)
if(PI === "3.14"){
    console.log("That is Pi");
} else {
    console.log("That is NOT Pi");
}

// !=  Inequality operator
if(PI != "3.14"){
    console.log("That is NOT Pi");
} else {
    console.log("That is Pi");
}

// !== Strict inequality operator (compare if values & data types are not equal)
if(PI !== "3.14"){
    console.log("That is NOT Pi");
} else {    
    console.log("That is Pi");
}