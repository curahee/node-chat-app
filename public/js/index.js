var socket = io();

socket.on('connect', () => {
  console.log('Connected to server');

  // socket.emit('createEmail', {
  //   to: '',
  //   text:''
  // });
  // from client to server
  socket.emit('createMessage',{
    from:'',
    text:'its me',
  });


});

socket.on('disconnect', ()=>{
  console.log('Disconnected from server');
});

// socket.on('newEmail', function(email){
//   console.log('New email', email);
// });

socket.on('newMessage', function(message){
  console.log('newMessage', message);
});
