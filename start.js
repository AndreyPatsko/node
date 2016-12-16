'use strick'
function User(name){
    this.name= name;
}
User.prototype.greet = function(user){
    console.log("Hi "+user.name);
}
module.exports.User = User;