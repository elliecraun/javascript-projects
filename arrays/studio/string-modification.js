const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let newStr = str.slice(0,3);
let endStr = str.slice(3); 
let finalString = endStr + newStr;
console.log(finalString);
//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`Moving the first letters of ${str} to the end of ${str} it will give you ${finalString}`);
//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

let userNum = input.question("Please enter a number: ")
let newStr2 = str.slice(0, userNum);
let endStr2 = str.slice(userNum);
let finalString2 = endStr2 + newStr2;
 console.log(finalString2);

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
userNum = input.question("Please enter a number: ")
if (userNum <= str.length - 1){
let newStr2 = str.slice(0, userNum);
let endStr2 = str.slice(userNum);
let finalString2 = endStr2 + newStr2;
 console.log(finalString2);
} else {
    console.log(`${finalString} Your entry was too large. Please use a number less than ${str.length}`);
}
