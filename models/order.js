var mongoose = require('mongoose'),
        Schema = mongoose.Schema
        timestamps = require('mongoose-timestamps');

var OrderSchema = new Schema({
    phone_number :{type : String, required :true , index : true},
    delivery_address :{type : String, required: true}, 
    contents :{ type : String, required : true}
    fulfilled :{type : Boolean, required : true, index : true}
});

OrderSchema.plugin(timestamps);
module.exports = mongoose.model('Order', OrderSchema);
