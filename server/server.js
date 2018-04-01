const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));


io.on('connection', (socket) =>{
  console.log('New user connected');

  // socket.emit('newEmail', {
  //   from: '',
  //   text: '',
  //   createdAt: 123
  // });
  //from server to client
  socket.emit('newMessage', {
    from:'',
    text:'',
    createdAt: 2345
  });

  socket.on('createMessage', (message) =>{
    console.log('create Message', message);
  });

  // socket.on('createEmail', (newEmail)=>{
  //   console.log('createEmail', newEmail);
  // })

  socket.on('disconnect', ()=>{
    console.log('User was Disconnected');
  });
});

server.listen(port, () => {
  console.log('Server is up on port 3000');
});
