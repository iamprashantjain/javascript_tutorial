for (var a = 1; a<=10; a++){
    console.log(a)
}


// for in loop for arrays


var arr = [1,2,3,4,5,6,7,8,9,10]

for(let i in arr){
    console.log(arr[i])
}

// -------------------------------------------

var arrs = [1,2,3,4,5,1,7,8,9,1]
cnt = 0
for(let i in arrs){
    if(arrs[i] == 1){
        cnt += 1
    }
}
console.log(cnt)


