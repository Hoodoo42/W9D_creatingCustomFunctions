// declaring the function that takes two numbers as its arguments (only accessible within this function)
function willDoMath(num1, num2) {
  // a variable thats value will be the sum of the two arguments added together
  let sum = num1 + num2;
  // a variable that will take the sum if the arguments and multiply it by 5
  let finalNumber = sum * 5;
  // the return is set to return the value that finalNumber holds
  console.log(finalNumber);
  return finalNumber;
}
// calling the function, with the two set number values for the arguments
willDoMath(2, 6);
willDoMath(1, 1);
willDoMath(10, 36);



// declaring a function that takes one string argument(only accessible within this function)
function checkLength(_word) {
  //    an if statement that will check the length of the string argument and return true if 9 characters or more and false if less.
  if (_word.length > 10) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}
// calling the function while giving it the value to take.
checkLength(`Hippopotamus`);
checkLength(`Dinosaur`);
checkLength(`Tree`);




// declaring a function that takes one argument as an array of strings (only accessible within this function)
function find(arrayOfStrings) {
    // a for loop that will loop through the if conditional until it has reached the end of the array length
  for (let counter = 0; counter < arrayOfStrings.length; counter++) {
    // if conditional that states the string inside the array must start with ph before the next code can run
    if (arrayOfStrings[counter].startsWith(`ph`)) {
    //  let variable is grabbing the matching result of the counter finding a string starting with ph
        let isPH = arrayOfStrings[counter];
        // console.log is printing the matching result 
      console.log(arrayOfStrings[counter]);
    //   retun function is grabbing the result held by the variable isPH and will give it to the caller of the function
      return isPH;
    }
  }

}
// These variables are holding arrays and giving it to the function to hold

let words = [`cool`, `rad`, `phat`, `excellent`];
find(words);

let planets = [
  `Mercury`,
  `Venus`,
  `Earth`,
  `Mars`,
  `Jupiter`,
  `Saturn`,
  `Uranus`,
  `Neptune`,
  `phluto`,
];
find(planets);

let birds = [`BlueJay`, `Eagle`, `Parrot`, `Tucan`, `Robin`];
find(birds);
