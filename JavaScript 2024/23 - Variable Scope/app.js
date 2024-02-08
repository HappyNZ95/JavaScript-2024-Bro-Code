//Variable scope is the context in which a variable is declared. 
//It defines the accessibility (visibility) of the variable.
//(Where a variable is recognised and can be used - within the function or outside the function)
//Local or global scope - where the variable is declared determines its scope.



function function1() {
    var x = 1; //local to function1
    console.log(x); //Can't see x from function2
}

function function2() {
    var x = 2; //local to function2
    console.log(x); //Can't see x from function1
}

function1();//1
function2();//2

let x = 3; //global

function function3() {
    console.log(x); //Retrieves global x
}

function function4() {
    let x = 4; //local to function4
    console.log(x); //Retrieves global x
}

//If it is not found in the local scope, it will look in the global scope.
function3();//3, global x
function4();//4, local x

