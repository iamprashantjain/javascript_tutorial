// array is like list & object is like dictionary
// it can also contain function, array or any other data type

var a = {
    'fname':'Prashant',
    'lname':'Jain',
    'age':26,
    'lang':['python','Js','Jquery','DataScience','HTML'],
    'fullname' : function(){
        return this.fname + " " + this.lname
    },
    'life':{
        'dob':'26-Jan-90',
        'city':'kanpur',
        'school':'st columbus'
    }
}

console.log(a)
console.log(typeof(a))
console.log(a.age)
console.log(a.lang[0])
console.log(a.fullname())


// this is just like self in python oop
// this.fname a's fname --> this is a

console.log(a.life)


// creating object

var me = new Object()

me.fname = "prashant"
me.lname = "Jain"
me.passion = "Travel"

console.log(me)


// array of objects

var a = [
    {'name':'prashat','age':15},
    {'name':'meenakshi','age':25}
]

console.log(a)



// const variable with array & object
// const values cant be reasigned or changed
// but with arrays its doable

const abc = [12,345,67]
console.log(abc)

abc[1] = 654
console.log(abc)


// same way we can change const objects
 