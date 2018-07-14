var fruits = [
    123, 
    '123',
    'some string',
    {name: 'some'},
   
]

console.log(fruits)

console.log(fruits[0] )

console.log(fruits[3] )

fruits[3.1]='a'   // it becomes a key actually
console.log(fruits[3.1] )

console.log(fruits)  

console.log(fruits.length) // lenghth is not increased


fruits.forEach(function(item , index , array){
    console.log(item , index);
})
