const events = require('events');
const EventEmitter = events.EventEmitter;
let users = [], msgs = [];

var logger = new EventEmitter();
logger.on('User', function(name){
    console.log(name);
    users.push(name);
});
logger.on('Message', function(msg){
    console.log(msg);
    msgs.push(msg);
});

logger.on('getUsers',function(){
    console.log(users.join('\n'));
});
logger.on('getMesages',function(){
    console.log(msgs.join('\n'));
});

logger.emit('User','John');
logger.emit('Message','Hello from John');
logger.emit('User','Mike');
logger.emit('Message','Hello from Mike');
logger.emit('getUsers');
logger.emit('getMesages');
