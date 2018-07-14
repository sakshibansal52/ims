
console.log(globalVar)   //undefined it means it it is present in your program ==> varialble hoisting  

var globalVar =123
console.log(globalVar)

function func(){
    console.log(globalVar)
    var localVar =12
 console.log(localVar)
}
func()

console.log(globalVar)

