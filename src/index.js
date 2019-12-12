const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);


const users = {};

const channels = {"General": []};

io.on('connection', function(req, res){
    console.log("User opened connection.");
});

http.listen(4000, function(){
    console.log("Pickles listening on 4000");
});
