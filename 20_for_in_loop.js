// to print object

var a = {
    'fname':'Prashant',
    'lname':'Jain',
    'age':26,
    'lang':['python','Js','Jquery','DataScience','HTML'],
}

// in order to print the values we need to run print command for each key

console.log(a.fname)
console.log(a.lname)

// instead we can use the for/in loop

for (var key in a) {
    console.log(key + " --> " + a[key]);
}

