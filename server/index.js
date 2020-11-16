const express = require('express');
const socketio = require('socket.io');

const cors = require('cors');
const app = express();
app.use(cors());


const router = require('./router')


const server =  require('http').createServer(app)
const io = socketio(server);


app.use(router);


io.on('connection',(socket) => {
    console.log("We have a new connection.");
    
    socket.on('disconnect', () => {
        console.log('User had left!!!');
    })
});



server.listen(process.env.PORT || 5000, () => console.log(`Server has started.`));

