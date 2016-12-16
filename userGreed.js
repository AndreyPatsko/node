'use strick'
var r = require('./start')
var user1 = new r.User("Vasya");
var user2 = new r.User("Kolya");
user2.greet(user1);