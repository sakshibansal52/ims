var add = require('./first')



add.sum(4, 5).then(data =>{
    console.log(data)
},err =>{
    console.log(err)
})