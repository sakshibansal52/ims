

// ques 1
/*1. Write a JavaScript function to convert a binary number 
to a decimal number. */
console.log("...........................1..........................")
function BinaryToDecimal(binary){

    var decimal= 0;
    var n=0

    for(var i = binary.length-1 ; i>=0; i--){
        decimal += binary[i]* 2**n
        n++
    }
  return decimal
}

console.log(BinaryToDecimal("1101"))


//ques 2
/*2. Write a JavaScript function to convert a
 decimal number to binary, hexadecimal or octal number. */
 console.log("...........................2..........................")
 console.log("....Decimal to Binary......")
function decimalToBinary(number){
    var result =[""] , i
    for(let i=number ; i > 0; i=parseInt(i/2))
    {
        result.push(i%2)
    }
    return result.reverse().join(" ");
}
console.log(decimalToBinary(16))


console.log("....Decimal to Octal........")
function decimalToOctal(number){
    var result =[""] , i
    for(let i=number ; i > 0; i=parseInt(i/8))
    {
        result.push(i%8)
    }
    return result.reverse().join(" ");
}
console.log(decimalToOctal(99))


console.log("....Decimal to hexadecimal........")
function decimalToHex(number){
    var result =[""] , i
    for(let i=number ; i > 0; i=parseInt(i/16))
    {
        result.push(i%16)
    }

    for(i=0; i<result.length ; i++){
        switch(result[i]){
            case 10 :  result[i] = "A"
                       break;
            case 11 :  result[i] = "B"
                       break;           
            case 12 :  result[i] = "C"
                       break;
            case 13 :  result[i] = "D"
                       break;
            case 14 :  result[i] = "E"
                       break;
            case 15 :  result[i] = "F"
                       break;
                                
        }
    }
    return result.reverse().join(" ");
}
console.log(decimalToHex(188))

//ques 3 
// 3. Write a JavaScript function to generate a random integer.
console.log("...........................3..........................")
function randomInt(){
    return Math.floor(Math.random()*100)
     
}
console.log("Random number :", randomInt())



//ques 4
/* 4. Write a JavaScript function to format a number up to specified
 decimal places.*/
 console.log("...........................4..........................")
 function round(num , precesion){
     var multipler = Math.pow(10 , precesion)
     var result = Math.round(num*multipler)/multipler

     return result
 } 

console.log("Rounding no upto 3 decimal: ",round(254.67859,3))

//ques 5
/*5. Write a JavaScript function to find the highest value in an array. */ 
console.log("...........................5..........................")
function max(a) 
       {
           let maxValue = Math.max.apply([], a);
           return maxValue;
       }
       console.log(" Max Value:",max([12,34,56,1]))


 //ques 6
/*6. Write a JavaScript function to find the lowest value in an array. */
console.log("...........................6..........................")
function min(a)
      {
           let minValue = Math.min.apply([],a)
           return minValue
      }
console.log("Min Value:", min([2,4,6,1,7]))


//ques 7
/*7. Write a JavaScript function to get the greatest common divisor (gcd)
 of two integers*/
 console.log("...........................7..........................")
 function gcd(num1, num2){
     var  result = 0
     for(i=1; i<num1 && i<num2 ; i++){
         if((num1%i == 0 ) && (num2%i == 0)){
             result = i;
         }
     }
     return result
 }
 console.log("Gcd of 15 20: ",gcd(10,20))


 //ques 8
 //8. Write a JavaScript function to test if a number is a power of 2
 console.log("...........................8..........................")
function po2(x){
   return (x != 0) && ((x & (x - 1)) == 0);
}
console.log(" Is Power of 2")
console.log("8:",po2(8))
console.log("34:",po2(34))

//ques 9 
/*9. Write a JavaScript function to round a number to a given decimal 
places.*/
console.log("...........................9..........................")
 function round(num , precesion){
     var multipler = Math.pow(10 , precesion)
     var result = Math.round(num*multipler)/multipler

     return result
 } 

console.log("Rounding no upto 5 decimal: ",round(254.6747457859,5))

//ques 10
/*10. Write a JavaScript function to hide email addresses to protect
 from unauthorized user.*/
 console.log("...........................10..........................")
protect_email = function (user_email) {
    var avg, split, p1, p2;
    split = user_email.split("@");
    p1 = split[0];
    avg = p1.length / 2;
    p1 = p1.substring(0, (p1.length - avg));
    p2 = split[1];
    return p1 + "...@" + p2;
};

console.log(protect_email("sakshibansal.52@gmail.com"));

//ques 11
/*11. Write a JavaScript function to capitalize the first letter of a string.*/
console.log("...........................11..........................")
function fCap(str){
    return str.charAt(0).toUpperCase() + str.slice(1); 
}
console.log(fCap("this is a simple strimng"))

//ques 12
/* . Write a JavaScript program that accept two integers and display the larger.*/
console.log("...........................12..........................")
function larger(num1 , num2){
    if(num1>num2){
        console.log(num1 ,"is larger")
    }
    else{
        console.log(num2,"is larger")
    }
}
larger(10 , 57)

//ques 13
/*13. Write a JavaScript program which compute, the average marks of the following students Then, this average is used to determine the corresponding grade.  
Student Name Marks The grades are computed as follows ​: 
                Range Grade 
David  80        <60   F 
Vinoth 77        <70   D 
Divya  88        <80   C 
Ishitha 95       <90   B 
Thomas 68        <100  A   */
console.log("...........................13..........................")
var a = [
   {
    name : 'David',
    marks : 80
   },
   {
    name : 'Vinoth',
    marks : 77
   },
   {
    name : 'Divya',
    marks : 88
   },
   {
    name : 'Ishitha',
    marks : 95
   },
   {
    name : 'Thomas',
    marks : 68
   },
]

var x = a.reduce(function(ac,b,c){
    if(c==1){
        return ac.marks + b.marks
    }
    else{
       return ac + b.marks
    }
})

var avg=x/5;
console.log("Average is: ",avg)

grade = ''
if(avg<60){
    grade = 'F'
}
else if(avg<70){
    grade = 'D'
}
else if(avg<80){
    grade = 'C'
}
else if(avg<90){
    grade = 'B'
}
else{
    grade = 'A'
}

console.log("Grade is :",grade)


//ques 14
/*
14. Write a JavaScript program 
to construct the following pattern,
 using a nested for loop.  
 * 
 *  * 
 *  *  *
 *  *  *  *
 *  *  *  *  *
 *  *  *  *  *  *
*/
console.log("...........................14..........................")
for (var i = 6; i >= 1; i--) {
    var str = "";
    for (var j = i; j <= 6; j++) {
    str += "*";
       }
   console.log(str);
  }


  //ques 15
  /* 15. Write a JavaScript function that generates all combinations
   of a string. */
   console.log("...........................15..........................")
   function strings(str1)
   {
   var arr1 = [];
     for (var x = 0, y=1; x < str1.length; x++,y++) 
     {
      arr1[x]=str1.substring(x, y);
       }
   var join = [];
   var temp= "";
   var slent = Math.pow(2, arr1.length);
   
   for (var i = 0; i < slent ; i++)
   {
       temp= "";
       for (var j=0;j<arr1.length;j++) {
           if ((i & Math.pow(2,j))){ 
               temp += arr1[j];
           }
       }
       if (temp !== "")
       {
           join.push(temp);
       }
   }
     console.log(join.join("\n"));
   }
   
   strings("cat");

