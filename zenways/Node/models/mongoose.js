var  mongoose = require('mongoose')
var dbPerson = require('./person')

mongoose.connect('mongodb://localhost/abc', (err,data)=> {
    if(err){
        console.log("Error")
    }
    else{
        console.log("Database connected")
    }
})

var newPerson = new dbPerson({
    name : "Zenways",
    age : 10,
    phone : [28664879704],
    address : {
        line1 : 3849735,
        line2 : 'hsuhdio',
        city : 'Delhi',
        state : 'Delhi',
        pincode : 10040,
        country : 'India'
    }
})

var newPerson2 = new dbPerson({
    name : "Zenways2",
    age : 10,
    phone : [286648797047],
    address : {
        line1 : 38497375,
        line2 : 'hsuhdhio',
        city : 'Delhhi',
        state : 'Deljhi',
        pincode : 10040,
        country : 'Ikndia'
    }
})




// newPerson.save((err , data) =>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log('Saved',data)
//     }
// })



newPerson2.save((err , data) =>{
    if(err){
        console.log(err)
    }
    else{
        console.log('Saved',data)
    }
})

// dbPerson.find({},(err , data)=> {
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(data)
//     }
// }) 



// dbPerson.finOneAndUpdate({email : 'abc@abc.com'}, { $set :{age : 45}}, (err , updated)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log('Data Updtaed')
//     }
// })


