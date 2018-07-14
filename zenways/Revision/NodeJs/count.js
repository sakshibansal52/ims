var counter = function(arr){
    return 'There are ' + arr.length + ' elemements in this array!' ;
};

//console.log(counter(['sakshi' , ' gaurav' , 'kajal' , 'arushi'] )) ;


var adder = function(a, b){
    return `the sum of ${a} and ${b} is ${a+b}`
}


 var pi = 3.142 ;



// module.exports.counter =  counter ;
// module.exports.pi = pi ;
// module.exports.adder = adder ;

//or

module.exports = {
    counter : counter ,
    pi : pi , 
    adder : adder

}


