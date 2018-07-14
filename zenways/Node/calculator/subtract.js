var subtract = (a , b) => {
    return new Promise((resolve , reject) => {
        if (!a || !b) {
            reject({
                success : false,
                msg : "Please enter all details"
            })
            
        }else{
            resolve({
                success : true,
                subtract : a-b
            })
        }
    })
}


module.exports = subtract
