var express = require('express');
var router = express.Router();
var User = require("../models/user.js");
var Order = require("../models/order.js");
var messages = require("../utils/messages.js");


router.route('/')
.post(function(req, res){
    res.set('Content-Type', 'text/xml');

    User.find({phone_number : req.From}, function(err, user){
        if(err) return res.send(messages.genericError);
        if(!user) return res.send(messages.doesNotExistError); 


        order = new Order();

        order.Phone_Number = req.body.From;
        order.delivery_address = user.delivery_address;
        order.contents = req.body.Body;
        order.fulfilled = false; 
        console.log(req.body, order);

        order.save(function(err){
            if(err) return res.send(messages.genericError);
            return res.send(messages.success);
        });
    });
})
.get(function(req, res){
  res.render('index', { title: 'This is the orders endpoint' });
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
