
eventToListenTo = 'tx'
room = 'inv';
var socket = require('socket.io-client')('http://178.128.49.199:3001');
socket.on('connect', function(){
    console.log('connected to bitcoind port 3001');

    socket.emit('subscribe', room);
})
socket.on(eventToListenTo, function(data) {
  console.log("New bitcoin transaction received: " + data.txid);
})

socket.on('disconnect', function(){
    console.log('bitcoin server stopped');
    
    const exec = require('child_process').exec;
    exec('sh restartBitcoin.sh',(error, stdout, stderr)=>{
        if (error) {
            console.error(`exec error: ${error}`);
          }        
          console.log(`stdout: ${stdout}`);
          console.log(`stderr: ${stderr}`);
    });
});
