var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/transactionsData');
var User = mongoose.model('User',{
    name:String,
    age:Number,
    surname:String
});
// var user1=new User({name:"Vasya",age:23,surname:"Smith"});

// user1.save(function(err){
//     if(err){
//         console.log(err)
//     }else{
//         console.log('user added!')
//     }
// });

// var user2=new User({name:"Kolya",age:26,surname:"Adamth"});
// user2.save(function(err){
//     if(err){
//         console.log(err)
//     }else{
//         console.log('user added!')
//     }
// });
// var result = null;
// User.find({'name':'Vasya'},'name age' ,function(err,user){
//     if(err){
//         console.log(err)
//     }else{
//        console.log(user);
//     }
// });

// User.remove({_id:"5853e7aeb9659f38bca7e8bf"},function(err){
//     console.log(err)
// })
// User.update({_id:"5853e804ebdc0f38dfcf3e4e"},{name:"dfdfdfdfdf"},function(err,user){
//     console.log(user)
// })
// var query = User.findOne({name:"dfdfdfdfdf"});

// query.select('-_id name age');
// query.exec(function(err,user){
//     console.log(user)
// // })
// User.find({})
// .where('age').nin([17,30]).exec(function(err,user){
//     console.log(user)
// });
User.find({'age':{$gte:15,$lt:30}}).limit(2).sort({'age':-1}).exec(function(err,user){
    console.log(user)
});
