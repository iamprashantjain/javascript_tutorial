// previous version
function hellow(){
    console.log("hellow")
}
hellow()


// 2nd way of function
let hello = function(){
    console.log("Hello")
}


// arrow function
let arrowF = () => console.log("Hello world")
arrowF()


let arrowF1 = (name) => console.log(`Hey ${name}`)
arrowF1('PrashantJ')


// Create an arrow function that takes two parameters and returns their sum.
let sum = (x,y) => console.log(`Sum: ${x+y}`)
sum(5,4)

let sum1 = (x,y) => x+y
let result = sum1(1564,987)
console.log(result)


// Single Line Arrow Function: Write a single-line arrow function that takes a number and returns its square.
let sqr = (x) => x*x
console.log(sqr(2))


