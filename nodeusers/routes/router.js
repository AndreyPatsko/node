let express = require("express"),
 router = express.Router(),
 MongoClient = require("mongodb").MongoClient,
 ObjectID = require("mongodb").ObjectID;

 router.get("/users", function(req,res){
     MongoClient.connect("mongodb://localhost:27017/nodeusers",function(err,db){
         if(!err){
             db.collection("users").find({}).toArray(function(err,users){
                 if(users){
                     res.send(users);
                 }
             })
             db.close();
         }
     })
 });

 router.delete("/users/:id",function(req,res){
     MongoClient.connect("mongodb://localhost:27017/nodeusers",function(err,db){
         if(!err){
             db.collection("users").remove({_id:new ObjectID(req.params.id)},function(err){
                 if(!err){
                     res.send(true);
                 }
             });
             db.close();
         }
     })

 });

 router.post("/users",function(req,res){
     MongoClient.connect("mongodb://localhost:27017/nodeusers",function(err,db){
         if(!err){
             db.collection("users").updateOne({_id:new ObjectID(req.body._id)},{$set:{name:req.body.name}},function(err,result){
                 if(result){
                     res.send(true);
                 }
             });
             db.close();
         }
     })

 });

 router.post("/users",function(req,res){
     MongoClient.connect("mongodb://localhost:27017/nodeusers",function(err,db){
         if(!err){
             db.collection("users").insert(req.body,function(err,result){
                 if(result){
                     res.send(true);
                 }
             });
             db.close();
         }
     })

 });

 router.get("/",function(req,res){
     res.send("./public/index.html");
 });


module.exports = router;