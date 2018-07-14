var sum = (a , b) => {
    return new Promise((resolve , reject) => {
        if (!a || !b) {
            reject({
                success : false,
                msg : "Please enter all details"
            })
            
        }else{
            resolve({
                success : true,
                sum : a+b
            })
        }
    })
}


sum(4).then(data => {
console.log(data)
    
}).catch(err =>{
    console.log(err)
})


//to export a file
module.exports = sum