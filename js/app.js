
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