// sort()
// reverse()

var arr = [1,5,7,9,4,2]
console.log(arr.sort())
console.log(arr.reverse())


// pop() - delete last element
// push() - add item at last

var arr = ["prashant","Meenakshi","Usha"]
arr.pop()
console.log(arr)


arr.push("Usha")
console.log(arr)


// shift() & unshift() -- just like pop & push, shift deletes 1st item
// and unshift() add item in the begining

var arr = ["prashant","Meenakshi","Usha"]
arr.shift()
console.log(arr)


arr.unshift("Parkr")
console.log(arr)


// concat() - to merge

var arr = ["prashant","Meenakshi","Usha"]
var brr = ["Ashok","Superman"]
console.log(arr.concat(brr))


var arr = ["prashant","Meenakshi","Usha"]
var crr = arr.concat("Shaktiman","HanumanJi")
console.log(crr)

var drr = crr.concat(arr,brr)
console.log(drr)


// join() - to join just like in python convert into 1 string
var err = drr.join("::")
console.log(err)
console.log(typeof(err))



// slice() - to extract item or items from an array
// slice(start,end)

var frr = drr.slice(1,2)
console.log(frr)


// splice() - to add items at specific index otherwise we can also use pop & push
// The splice() method in JavaScript is used to modify the contents of an array
// by removing or replacing existing elements and/or adding new elements.
// It operates directly on the original array and returns an array containing the
// removed elements, if any.

// splice(index, how many items, "newvalue", delete)

drr.splice(2,0,"Roma","Meenakshi")
console.log(drr)


var fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Grapes'];

// Example 1: Remove 1 element at index 2
fruits.splice(2, 1);
console.log(fruits);


// Example 2: Remove 2 elements at index 1 and insert 'Pear' and 'Cherry'
fruits.splice(1, 2, 'Pear', 'Cherry');
console.log(fruits);


// Example 3: Insert 'Kiwi' at index 3 without removing any elements
fruits.splice(3, 0, 'Kiwi');
console.log(fruits);


 
// isArray() - to check if var is an array
if(Array.isArray(arr)){
    console.log("Yes",arr)
}
else{
    console.log("Not",arr)
}


// indexof -- to check the index of any item in array
// indexof("search item",start)
// if that item is found then return the index else return -1

var fruits = ['Apple', 'Banana', 'Grapes','Orange', 'Mango', 'Grapes'];
var ind = fruits.indexOf('Grapes',3)   //start search from index 3 so grapes present at 2 & 5 so it will print 5
console.log(ind)


// lastindexof() starts finding from end like from right to left unlike indexof() which goes from left to right
var las = fruits.lastIndexOf("Grapes",4)
console.log(las)



// includes() -- to search if specific item exist in array or not
// it returns true or flase
var c = fruits.includes("Loha")
console.log(c)



// some() 
adult = [12,17,11,1,2]
// lets say we want to check if any of the value > 18
// then we can use some() which takes a function as input
// so we need to create another function to check the value > 18

var b = adult.some(checkadult)

function checkadult(adult){
    return adult >= 18
}

console.log(b)


// every()
// just like some every also check if any value pases the condition
// only difference is some() returns true if any value passes the condition
// and every() returns true when all the value pass the condition

adult = [18,19,20]
var b = adult.every(checkadult)
console.log(b)



// find() & findindex()
// find() returns the 1st value meeting the condition defined & skip others
// findindex() returns the index

var a = [15,26,18,100,25]

function checkadult(adult){
    return adult >= 18
}

var b = a.find(checkadult)
var c = a.findIndex(checkadult)

console.log(b,c)



// filter - unlike find, filter returns both the values meeting the condition
var b = a.filter(checkadult)
console.log(b)



// tostring() - like join
var a = ["prashant","Shweta","Usha","Ashok"]
var b = a.toString()
console.log(b)
console.log(typeof(b))



// foreachloop
a.forEach(function(value,index){
    console.log(index,':',value)
})


