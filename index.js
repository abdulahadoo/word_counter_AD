#! /usr/bin/env node
//this line called a shebang, it tell us the OS to run with jode js
import inquirer from "inquirer";
//Declare a constant 'answere' and assign it to the result of inquirer.prompt function
const answere = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your sentence to count the word:"
    }
]);
const words = answere.sentence.trim().split(" ");
// Print the array of words to the console
console.log(words);
// Print the word count of the sentence to the console
console.log(`Your sentence word count is ${words.length}`);
