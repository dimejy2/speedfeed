var mongoose = require('mongoose'),
        Schema = mongoose.Schema;


var UserSchema = new Schema({
    username : {type: String, required : true, index : {unique : true}}, 
    password : {type : String, required : true ,select : false}, 
    phone_number : { type : String, required : true, index :{unique: true}},
    delivery_address :{type : String}, 
    __v : {type  : Number, select : false}

}); 

module.exports = mongoose.model('User', UserSchema);
