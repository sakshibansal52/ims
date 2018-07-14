const random = require('random-number')

console.log(random())  // any no

console.log(random({ //between min and max
    integer : true,
    max: 5000 , 
    min : 309
}))