const express = require("express");
const path = require('path');
const bodyParser = require('body-parser');
const passport = require('passport');

let User = require('../models/user');

let router = express.Router();


function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        next();
    } else {
        req.flash("info", "You must be logged in to see this page.");
        res.redirect("/login");
    }
}

router.get('/cat',function(request,response){
    console.log(path.parse(request.path));
    response.sendFile('cat.jpg',{root: './public'});
});

router.post('/',function(request,response){
    response.sendFile('./public/index.html')
});



router.post('/registration',function(req,res,next){
    let email = req.body.email;
    let password = req.body.password;
    let nickname = req.body.nickname;

    User.findOne({nickname:nickname},function(err,user){
        if(err){
            return next(err);
        }
        if(user){
            req.flash('error','User already exists');
            return res.redirect('/registration');
        }
        let newUser = new User({email:email,password:password,nickname:nickname});
        newUser.save(next);
    });
},passport.authenticate('login',{
    successRedirect: '/login',
    failureRedirect: '/registration',
    failureflash:true
}));

router.post("/login", passport.authenticate("login", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true
}));



module.exports = router;