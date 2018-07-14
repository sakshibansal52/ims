var add = require('./add');
var subtract = require('./subtract');

var  a = process.argv;
var s = a[2];
console.log(s);

 
var result = (s) =>{
    if(s.split('+')){
        console.log( add.sum(parseInt(s[0]), parseInt(s[1]) ))
    }
}

result(s)