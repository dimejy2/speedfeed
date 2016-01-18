var express = require('express');
var router = express.Router();
var User = require('../models/user.js');


router.route('/')
.get( function(req ,res ) {
    console.log(User);
    User.find(function(err, users){
        if (err) res.send(err);
        res.json(users);
    });
})
.post(function(req, res){
    var user = new User();

    user.username = req.body.username;
    user.password = req.body.password;
    user.phone_number = req.body.phone_number;
    user.delivery_address = req.body.delivery_address;
    user.save(function(err){
        if(err){
            if(err.code == 11000){
                return res.sendStatus(400).json({"message" :"an account with that username already exists"});
            }
         return res.send(err); 
        }
    });

return res.json({ message  :'User created'});

});

router.route('/:username')
.get(function(req, res){
    User.find({username : req.params.username}, function(err, user){
        if(err) return res.send(err);
        res.send(user);
    });
})
.patch(function(req, res){
    console.log(req.params.username);
    User.find({username : req.params.username}, function(err, user){
        if(err) return res.send(err);

        if(req.body.password) user.password = req.body.password;
        if(req.body.phone_number) user.phone_number = req.body.phone_number;
        if(req.body.delivery_address) user.delivery_address = req.body.delivery_address;

        user.save(function(err){
            if(err) return res.send(err);
            return res.sendStatus(200);
        }); 
    }); 
})

.delete(function(req, res){

    User.remove({
        username : req.params.username
    }, function(err){
        if(err) return res.send(err);
        res.json({ success : true, message : 'Successfuly Deleted User ' + req.params.username});
    })
});
module.exports = router;
