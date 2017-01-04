const express = require("express");
const path = require('path');
const bodyParser = require('body-parser');
const passport = require('passport');

let router = express.Router();

let User = require('../models/users');

router.get('/registration',function(request,response){
    response.redirect('/');
});

// router.get('/login',function(request,response){
//     response.redirect('/');
// });

router.post("/login", passport.authenticate("login", {
    successRedirect: "/home",
    failureRedirect: "/login",
    failureFlash: true
}));

router.post('/registration',function(request,response){
    let nickname = request.body.nickname;
    let email = request.body.email;
    let password = request.body.password;

    User.findOne({nickname:nickname},function(err,user,next){
        if(err){
            return next(err);
        }
        if(user){
            request.flash('error','User already exists');
            return response.redirect('/registration');
        }
        let newUser = new User({email:email,password:password,nickname:nickname});
        newUser.save(function(err){
            if (err) console.log(err);
            
        });
        // response.redirect('/login');
        response.send(true);
    });
});


router.get('/',function(request,response){
    response.senFile('./client/index.html');
});
module.exports = router;