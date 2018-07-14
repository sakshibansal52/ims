
//*******************javascipt revision********* 

//single line comment
/*
mutilple
line 
comment
*/

/*
//declaring variables
var a = 20   //inreger type variable
const a = 20  //constant type variable
let b = 20 // let type variable are scope limited

//Functions
//1. Normal form
function abc(parameter)

{
    //define
}

//2. arrow function
var abc = (parameter) => { function defination}

//3. using var
var a = function(){   // bydefault it goes up 

}


//Data types
//1. string     var a =" "
//2.Number       var a =12
//3.Date          Date = new Date()
//4. Boolean      true or false
//5.Array         [' ' , " ", { }, []]
//6.Objects       obj = { a : " some", b: " thing" , }


//executes linewise
var a= 20;
var b = 30
a=b
a=a+b
a=60


//conditional statements


marks>90 =>A
marks<90=> B

  
marks = 100
var grade = marks>90?'A':'B'


 marks = 40
if (marks > 90){
    grade = ' A'
}
else if(marks>80 && marks<90){
    grade=' B'
}
else if(marks>70 && marks<80){
    grade = ' C'
}

else{
    grade =' D'
}


console.log(grade)



//Looping statements
1. for loop
2. while loop
3. do while


var a =220
function abc(){
    var c=30
    console.log(a)
}
abc()
console.log(c)  //error



*/


//closures
var a = function(x){
    return function (y){
        return function (z){
            console.log(x+y+z)
        }
    }
}


 var abc = a(4)
 var xyz = abc(2)
 var last = xyz(1)


 var last1  = a(1)(3)(4)

 //Strings operations
 //1. str.toUpperCase()
 //2. str.toLowerCase()
 //3. str.length
 //4. parseInt(str)
 //5. split  =>  var xyz = " Sakshi"
               // xyz.split(' ')             =>[' S', ' a ',...]

//6. slice  =>  var abc ="Sakshi"
              //  abc.slice(0,3)       =>Sak

              

//Array
arr=[1,2,3,4,5]
for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}  

for( x in arr){
    console.log(arr[x])
}


//foreach
arr.forEach(element => {             //  
    console.log(element)             //
});                                  //  


//Map 

var a=[56 , 52 , 3,46]
var x= a.map(function(element ,index , array){
    return element/3
})
console.log(x)

//array funtions   =>here a is array name
//1. a.push()  //adds element at last
//2. a.pop()  //deletes elemnts fron end
//3. a.unshift() // adds element at first
//4.  a.shift()   // delete element from first
//5.  a.slice(startno , endno)   //end index is not included
//6. a.splice(from where u want to delete , how many elements, optional=>if you want to insert something what u deleted)   //deletes from the position we want
     //  a.splice(1,0,78)  =>it will replace 1 index value with 78 and deletes npthing as 0

// 7.  a.filter(element =>{     })  
//8.   a.reduce()
     //var arr = [1,2,3,4,5]
     // var x = arr.reduce(function(a,b,c){
   //      return a+b
   //  })


 //9. a.join('') 
 
 //10. Objects
// get and set
var obj = {
    a:5 ,
    get b(){
        return this.a+1;
    }
}


var obj = {
    a:5 ,
   set b(){
       this.a = this -1 ;

   }
    }



    










