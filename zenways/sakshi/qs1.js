
/* Q.1 ​Test the first character of a string is uppercase or not. */
console.log("........................1............................")
var r = /^[A-Z]/
console.log("Sakshi :",r.test("Sakshi"))
console.log("sakshi",r.test("sakshi"))

/*Q.2 Write a Regex which accept only string values.( without any spaces )  */
console.log("........................2............................")
var r = /[a-zA-Z]+$/

console.log("sakshi1 :",r.test("sakshi1"))
console.log("sakshi bansal :",r.test("sakshi bansal"))

//Q.3 Write Regex which accept only numerical values.
console.log("........................3............................")
var r = /^[0-9]+$/
console.log("123",r.test("123"))
console.log("123bcd",r.test("123bdc"))

//Q.4 Write Regex which checks whether a given value is an valid url or not. 
console.log("........................4............................")
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

console.log(" sakshibansal.52@gmail.com :",validateEmail("sakshibansal.52@gmail.com"))
console.log(" sakshi@bansal.52@gmail.com :",validateEmail("sakshi@bansal.52@gmail.com"))



//Q.5 Write Regex which checks  whether a given value is hex-color value or not. 
console.log("........................5............................")
function is_hexadecimal(str)
{
 regexp = /^[0-9a-fA-F]+$/;
  
        if (regexp.test(str))
          {
            return true;
          }
        else
          {
            return false;
          }
}

console.log("ffffff :",is_hexadecimal("ffffff"));

console.log("fz5500 :",is_hexadecimal("fz5500"));


/* Q.6 Write a JavaScript program to delete the rollno property from the following object.  Also print the object before or after deleting the property.  Sa
var student = {  name : "David Rayy",  sclass : "VI",  rollno : 12  }; 
*/
console.log("........................6............................")
var student =
{
 name : "Davis Rayy",
 sclass : " VI",
 rollno : 12
   
};

console.log(student)
delete student.rollno;
console.log("Rollno deleted :",student)

//ques 7
/*
Q.7 Write a JavaScript program to get the length of an JavaScript object. 
Sample object : var student =
 {  name : "David Rayy",  sclass : "VI",  rollno : 12  }; 
*/
console.log("........................7............................")
var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12
}
var size = Object.keys(student).length;
console.log("length is :",size)

//ques 8
// Q.8 Add a new method to an existing prototype
console.log("........................8............................")
var a ={
    a : '1',
    b: '2'
}
a.name = function(){
    console.log(a.b)
}

a.name()




//ques 9
/* Q.9 Create a function which finds and return the second largest
 number in an array. */
 console.log("........................9............................")
 function secLar(arr){
     var newarrr = [] , seclar
        arr.sort(function(a,b){ return a-b})
        slar = arr[arr.length -2] 
        console.log(slar)    
 }

 secLar([4,2,6,7]," :Second largest of [4,2,6,7] ")



 //ques 10
 /*Q.10 Write a JavaScript program to compute the union of two arrays.
  Sample Data : console.log(union([1, 2, 3], [100, 2, 1, 10])); [1, 2, 3, 10, 100] */
  console.log("........................10............................")
  function union(arra1, arra2) {
  
    if ((arra1 == null) || (arra2==null)) 
      return ;
    
    var obj = {};
   
    for (var i = arra1.length-1; i >= 0; -- i)
       obj[arra1[i]] = arra1[i];
   
    for (var i = arra2.length-1; i >= 0; -- i)
       obj[arra2[i]] = arra2[i];
   
    var res = [];
   
    for (var n in obj)
    {
    
      if (obj.hasOwnProperty(n)) 
        res.push(obj[n]);
    }
   
    return res;
  }
  console.log(union([1, 2, 3], [100, 2, 1, 10]));


  //ques 11
  /*Q. 11 Write a JavaScript function to check whether an `input` is
  Test Data : console.log(is_array('w3resource')); 
   console.log(is_array([1, 2, 4, 0])); false true*/
   console.log("........................11............................")
   function is_array(arr){
       return Array.isArray(arr)
   }
   console.log(is_array('w3resource')); 
   console.log(is_array([1, 2, 4, 0]))

   //ques 12
   /*Q. 12 Write a JavaScript function to get the first element of an array.
    Passing a parameter 'n' will return the first 'n' elements of the array. 
     Test Data :  console.log(first([7, 9, 0, -2]));  console.log(first([],3));
      console.log(first([7, 9, 0, -2],3)); console.log(first([7, 9, 0, -2],6));
       console.log(first([7, 9, 0, -2],-3));
    Expected Output :  7 []  [7, 9, 0]  [7, 9, 0, -2]  [] */
    console.log("........................12............................")
 function first(arr, n) {
      if (arr== null) 
      return void 0;
    if (n == null) 
      return arr[0];
    if (n < 0)
      return [];
    return arr.slice(0, n);
  };

console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));

//ques13
/*Q.13 Write a JavaScript program to find the most frequent item of an array. 
 Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
 Sample Output : a ( 5 times ) */
 console.log("........................13............................")
 var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var mf = 1;
var x = 0;
var item;
for (var i=0; i<arr1.length; i++)
{
        for (var j=i; j<arr1.length; j++)
        {
                if (arr1[i] == arr1[j])
                 x++;
                if (mf<x)
                {
                  mf=x; 
                  item = arr1[i];
                }
        }
        x=0;
}
console.log(item+" ( " +mf +" times ) ") ;

//ques 14
/* Q.14 Write a JavaScript program to compute the sum and product of 
an array of integers*/
console.log("........................14............................")
function sumMul(arr){
    var sum = 0 , mul = 1
    for(let i=0 ; i<arr.length ; i++){
        sum += arr [i]
        mul += mul*i
    }
    console.log("Sum and Multiplication of "+arr+": "+sum + " ,"+ mul)
}

sumMul([1,2,3,4])


//ques 15
/*.15 Write a JavaScript program to add items in an blank array and 
display the items. */
console.log("........................15............................")
var abc =[]
console.log(abc)
abc.push("Sakshi")
abc.push("Bansal")
console.log(abc)

//ques 16
/*Q.16 Write a JavaScript program which prints the elements of the following array.
 Note : Use nested for loops.
  Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
 Sample Output :  "row 0" " 1" " 2" " 1" " 24" "row 1" */
 console.log("........................16............................")
 var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
 
for (var i in a) 
{
   console.log("row " + i);
   for (var j in a[i]) 
     {
      console.log(" " + a[i][j]);
     }
}

//ques 17
/*     Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' 
and 'NaN' values from an array.
  Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null] 
Expected result : [15, -22, 47]   */
console.log("........................17............................")

function rem(arr){
    var arr1 = []
    for( let i=0 ; i< arr.length ; i++){
        if(arr[i]){
              arr1.push(arr[i])
        }
        
    }
    console.log(arr1)
    
}

rem([NaN, 0, 15, false, -22, '',undefined, 47, null])




