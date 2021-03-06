var express = require('express');
var router = express.Router();
var User = require("../models/user.js");
var Order = require("../models/order.js");
var messages = require("../utils/messages.js");


router.route('/')
.post(function(req, res){
    res.set('Content-Type', 'text/xml');

    User.findOne({phone_number : req.body.From}, function(err, user){
        if(err)  return res.send(messages.genericError); 
        if(!user) return res.send(messages.doesNotExistError); 
        
            order = new Order();
            order.phone_number = req.body.From;
            order.delivery_address = user.delivery_address;
            order.contents = req.body.Body;
            order.fulfilled = false; 

            order.save(function(err){
                if(err) return res.send(messages.genericError);
                return res.send(messages.success);
            });



    });
})
.get(function(req, res){
    Order.find(function(err, orders){
       if(err) return res.send(err);
       res.send(orders);
    }); 
});


router.route('/:username')
.get(function(req, res){

})
.post(function(req, res){

});

router.route('/:username/:order_id')
.get(function(req, res){

})
.patch(function(req, res){

})
.delete(function(req, res){

});
module.exports = router;
