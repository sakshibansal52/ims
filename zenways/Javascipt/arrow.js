function sum(a,b){
    return a+b
}

var sumNew = (a,b) =>{return a+b;}

console.log(sumNew(1,2))



// find
function a(b){
    b()
}
var b = function(){
    console.log('inside b')
}

a(b)

//filter

var words = ['spray',
'123456',
'986524567',
'linie',
'destryction']

var prregexp = /pr/;  //regular exp to be checked
const result = words.filter(word => word.match(prregexp));


console.log(result)