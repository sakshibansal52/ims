var mongoose = require('mongoose')
var Schema = mongoose.Schema

var person = new Schema({
    name : String,
    fathersName:{
        type : String , 
        required : true,
        default : " dshj"

    },
    email :{
        type :String,
        unique :true,
        default : 'hdkh'
    },
    age : Number,
    phone : [{ type: Number}],
    address : {
        line1 : Number,
        line2 : String,
        city : String,
        state: String,
        pincode : Number,
        country : String
    },
    active : Boolean,
    createdOn  : Date
})

module.exports = mongoose.model('people', person)