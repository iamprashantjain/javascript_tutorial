// var, let & const

// only difference b/w var & let is that var can be overwritten & redeclared while let can not de declared again
// in moder javascript codes, its better to declare variable as let then var to avoid reasignment of values

var a = 5
var b = 7
b = 0

console.log(a + b)

let al = 5
let bl = 7
al = 10
let al = 10         //this will thro error

// VM245:14 Uncaught SyntaxError: Identifier 'al' has already been declared
// when declaring al again its giving error
console.log(al + bl)

// const is constant variable it cant be changed or reasigned
const dc = 5
dc = 7

// VM357:2 Uncaught TypeError: Assignment to constant variable.at <anonymous>:2:4