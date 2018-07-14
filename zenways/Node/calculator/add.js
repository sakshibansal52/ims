exports.sum = (a , b) => {
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

// module.exports = sum
