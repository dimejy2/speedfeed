var mongoose = require('mongoose'),
        Schema = mongoose.Schema;


var OrderSchema = new Schema({
    Phone_Number :{type : String, required :true , index , true},
    Address ;{type : String, required, true}, 
    Order_Contents :{ type : String, required : true}
    fulfilled :{type : Boolean, required : true, index , true}
});

module.exports = mongoose.model('Order', OrderSchema);
