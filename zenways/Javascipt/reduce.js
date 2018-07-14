var rest = [
    {
        dish : 'Pasta',
        price : 50
    },
    {
        dish : 'Pizza',
        price : 80
    },
    {
        dish : 'falalel',
        price : 75
    },
    {
        dish : 'sphagetti',
        price : 78
    }
]

var x = rest.reduce(function(ac,b,c)
{ 
if(c==1){
    return ac.price + b.price
}
else{
   return ac + b.price
}
})

console.log(x)