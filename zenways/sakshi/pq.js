
console.log("......................1.......................")
/*1. Create Two variables with number values in them and display
 the result inside console*/

 var a = 12
 var b = 32
 console.log("a = " , a  + " , b = " , b)

console.log("......................2.........................")
 /*2. Create a function that accepts two parameters and returns 
 the result after multiplying them. Also Display the result inside 
 console. Hint : ​function​ ​name
​ (​parameter1, parameter2) 
{  code to be executed return result }  */

function mul(para1 , para2){
    return para1*para2
}

console.log(mul(2,5))


console.log("......................3.........................")
/*3. Create two string variables concatenate ( Add ) them and display 
the length of the result string. Hint : Use ​.length​  method */

var str1 = "Sakshi"
var str2 = "Bansal"

var str12 = str1 + str2
console.log("length is :" , str12.length)


console.log("......................4............................")
/*4. Create a variable  var​ str = ​"Please locate where 'locate' occurs!"​;
 Display(in console) the position of first occurrence of the   word “Where” 
 and index of the last occurrence of “locate”.*/

var str = "Please locate where 'locate' occurs! "
 console.log("First occurence of where is : " , str.indexOf("where") +
  "\nLast occurence of locate : ", str.lastIndexOf("locate"))  

 
 console.log("......................5................................")
  /* 5. var​ str = ​"Please locate where 'locate' occurs!"​;
   Extract the word “locate” from the above string.   */
   var str = "Please locate where 'locate' occurs!"
   console.log(str.search(/locate/i))

   
console.log(".......................6..................................")
 /* 6. str = ​"Please visit Microsoft!"​; 
   Replace the word “Microsoft” with google and console the result  */

   str = "Please visit Microsoft!"
   console.log(str.replace(/Microsoft/i , "google")) 
   
   
console.log(".......................7..................................")   
 /*  7. var​ text1 = ​"Hello World!"​; 
    Convert the variable to uppercase and lowercase and console the result. */
   var text1 = "Hello World!"
     console.log("Uppercase:" , text1.toUpperCase())
     console.log("Lowecase: ", text1.toLowerCase())   

 console.log("......................8.............................")    
 /* 8. var​ text = ​"Hello!"​; 
 Convert the above word to an array and console the result */
   
        var text = "hello!"
        console.log([text])


console.log("........................9...............................")
/*   9. var​ fruits = [​"Banana"​, ​"Orange"​, ​"Apple"​, ​"Mango"​];
 For the above array :  - Add a new element. - Remove any existing from
 the element. - Check if any given variable is an array or not. 
- Change any specific element to another value. - Add new element to a
 specific location (not front or last). - Convert the given array to a string. */
  
   var fruits = ["Banana ", "Orange" , "Apple" , "Mango"]
   console.log(fruits)

   fruits.push("Kiwi")
   console.log("added new", fruits)

   fruits.pop()
   console.log("element poped", fruits)

  console.log("array:" , Array.isArray(fruits))

  fruits[1]="Kiwi"
  console.log("value changed:", fruits)

  fruits.splice(1,0,"new1")
  console.log("added new value at 1 index:",fruits)

  //fruits.join()
  console.log(fruits.join())

console.log("........................10..................................")
/*10.var​ x = ​9.656​;
   - Convert the above number toa string and console the result.
    - Fix this number to two decimal places and console the result.  */

    var x = 9.656;
    console.log(x.toString())
    console.log(x.toFixed(2))

console.log("..........................11.................................")
/* 11.var​ x = ​7.65  
    - Convert the value to a nearest integer and console the result. 
    - Calculate the square root of above variable and console the result.   */
    
    var x= 7.65
    console.log(Math.round(x))
    console.log(Math.sqrt(x))

console.log("...........................12...............................")   
/* 12.Generate a random number between 0 to 9 and 0 to 99 then console
 the result  */

   console.log(Math.floor(Math.random()*10))
   console.log(Math.floor(Math.random()*100))


console.log("...........................13...............................")
/* 13.Sort this array  ​var​ points = [​40​, ​100​, ​1​, ​5​, ​25​, ​10​]; And console
    the result. */
    
    var points = [40 , 100 , 1, 5 ,25 ,10]
    console.log(points.sort(function(a, b){return a - b}))






















