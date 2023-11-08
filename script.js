"use strict";

// a prhase that will be translated into 'whale talk'
let input = "turpentine and turtles";

// whale language
const vowels = ["a", "e", "i", "o", "u"];

let resultArray = [];

// iterate through each letter of the input variable text
for (let i = 0; i < input.length; i++) {
  // double 'e' and 'u' and push it to the resultArray
  if (input[i] === "e") {
    resultArray.push(input[i]);
  } else if (input[i] === "u") {
    resultArray.push(input[i]);
  }

  // iterate through the vowels array each the outer loop runs
  for (let j = 0; j < vowels.length; j++) {
    // compare the input text to every letter in the vowels array
    if (input[i] === vowels[j]) {
      resultArray.push(vowels[j]);
    }
  }
}

// join the resultArray array into a single string and capitalize all of its letter
let resultString = resultArray.join(" ").toUpperCase();

console.log(resultString); // Output: U U E E I E E A U U E E
