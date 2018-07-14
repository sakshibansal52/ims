function Car(make, mode1 , year){
    this.make=make;
    this.mode1= mode1
    this.year=year
    this.name='heel'

    this.getMake = function(){  //assignning fn to var
        return this.make;
    }
}

var kencar = new Car('Nissan' , '3002A' , 1992)

var zencar = new Car('Honda' , '3004g' )
console.log(kencar)
console.log(zencar)

kencar.name='hello'

console.log(kencar)



function Car2(kencar){
    return kencar
}
console.log(Car2(kencar)) 


console.log(kencar.getMake()) //calling getmake in car 


delete kencar.make;
console.log(kencar)

console.log(Object.keys(kencar)) //as prototype keyword is not used while deleting it will be deleted from keys
 

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

