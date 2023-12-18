var a = [1,2,3,4,5]

var b = a.map(exp)

function exp(x){
    return x * 100
}

console.log(b)


var a = [
    {'fname':'prashant','lname':'jain'},
    {'fname':'shweta','lname':'jain'},
    {'fname':'usha','lname':'jain'}

]

var b = a.map(constructor)

function constructor(x){
    return x.fname + " " +  x.lname
}

console.log(b)