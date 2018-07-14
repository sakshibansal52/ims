var newCar = new Object()  //1st method of creating object


newCar.name = 'Honda'
newCar.engineType = 'Petrol'
newCar.year = '21978'

console.log(newCar)

for(runner in newCar)
{
    console.log(runner)
}


for(runner in newCar)
{
    console.log(runner  + '  ' +newCar[runner])
    console.log(Object.keys(newCar))
    console.log(Object.getOwnPropertyNames(newCar))
}

var Car = { name:'HONDA', engineType : 'Petrol'}  //2nd methiod of creating object
console.log(Car)