// length returns the len  of string

var str = "my name is prashant jain"

var a = str.length
console.log(a)



// tolowercase & touppercase
var a = str.toLowerCase()
console.log(a)

var a = str.toUpperCase()
console.log(a)


// includes - to find a word, it returns boolean, its case sensitive
var a = str.includes('jupy')
console.log(a)


// startswith()
var a = str.startsWith("m")
console.log(a)


// endswith()
var a = str.endsWith("m")
console.log(a)


// search - it returns the index, if not return then return -1
var a = str.search("prashant")
console.log(a)


// match() - it returns an array of the word
var str = "my name is prashant jain is"
var a = str.match(/is/g)
console.log(a)      //(2) ['is', 'is']



// indexof & lastindexof - same as in array
// indexof starts from left to right & return the index of the 1st occurance
// while lastindexof starts from right to left that is starting from end to start
// returning the index of the 1st occurance, if not found then return -1


// replace
var a = str.replace("prashant","chinki")
console.log(a)


// to replace all "is" present in string using regex
var a = str.replace(/is/g,"the")
console.log(a)



// trim()
// remove extra space


// charAt()
// return the character on that index

var a = str.charAt(3)
console.log(a)


// charcodeat
// return skycode from sky table which is the keyboard code, search on google
var a = str.charCodeAt(3)
console.log(a)


// fromcharcode
// we can pass the code & it returns the character 
var a = String.fromCharCode(110)
console.log(a)



// to concat string
var a = "My Name is "
var b = "Prashant Jain"

var c = a.concat(b)
console.log(c)


// split
var c = c.split(" ")
console.log(c)


// repeat


// slice - just like array

// substr
// just like slice

c = "my name is prashant jain"
var a = c.substr(1,5)
console.log(a)


// substring
var a = c.substring(1,5)
console.log(a)



// tostring - to convert any dtype to string
var a = 1
console.log(typeof(a.toString()))


