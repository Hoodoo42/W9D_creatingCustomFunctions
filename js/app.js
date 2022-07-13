
// declaring the function that takes two numbers as its arguments
function willDoMath(num1, num2){
    // a variable thats value will be the sum of the two arguments added together
    let sum = (num1+num2);
    // a variable that will take the sum if the arguments and multiply it by 5
    let finalNumber = (sum*5);
    // the return is set to return the value that finalNumber holds
    return finalNumber;
}
// calling the function, with the two set number values for the arguments
willDoMath(2,6)


// declaring a function that takes one string argument
function checkLength(_word){
//    an if statement that will check the length of the string argument and return true if 9 characters or more and false if less.
    if(_word.length > 10){
        return true;
    }else{
        return false;
    }
}
// calling the function while giving it the value to take.
checkLength(`Hippopotamus`);