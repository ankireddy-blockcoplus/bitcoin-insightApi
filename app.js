var express = require('express');
var http = require('http');

var app = express();
var socket = require('./socket');

var server = http.createServer(app);

var port = process.env.PORT || 3000;
var host = '127.0.0.1';

server.listen(port, host, ()=>{
    console.log(`Server started on http://${host}:${port}`);
})