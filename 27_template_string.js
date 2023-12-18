var user = "Prashant Jain";
var greet = `Hello, ${user}!`;
console.log(greet);


// ------------------------------------------------------


var salary = 500000;

if (salary <= 500000) {
    console.log("No Tax");
} else if (salary > 500000 && salary <= 1000000) {
    console.log(`Tax will be: ${(salary * 5) / 100}`);
} else if (salary > 1000000 && salary <= 1500000) {
    console.log(`Tax will be: ${(salary * 10) / 100}`);
}


// -----------------------------------------------------------

// Create a template string that includes your name and a greeting message.
var name = "Prashant Jain"
var greet = `Howdy ${name}?`
console.log(greet)


// Combine two variables using a template string to form a sentence.
var name = "Prashant Jain"
var age = 33
var school = "St Columbus"
var city = "Kanpur"

console.log(`Hello everyone, I'm ${name}, My age is ${age}. I went to ${school} in ${city}`)


// Using template strings, create a message that includes a mathematical expression,
// such as adding two numbers together.

var salary = 1000000
var tax = 5

console.log(`Since my salary is ${salary}, I'll be paying ${(salary*tax)/100} as Tax !!`)
