// function functionName(){             --> declarion
//     statemewnt                       --> code inside function
// }

// functionName()                       --> calling funtion



function hello(){
    console.log("Hellow")
}

hello()



// ----------------------------------------------
// function with parameters

function sum(a,b){
    console.log(a+b)
}

sum(5,4)
sum(13,8)


// --------------------------------------------------
// function with return value

function sum(a,b){
    let x = (a+b)
    return x
}


var y = sum(65,245)
console.log(y)