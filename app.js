const express = require('express');

const proxyaddr = require('proxy-addr');

const app = express();

// Customize the trusted proxy settings

app.set('trust proxy', ['loopback', 'linklocal', 'uniquelocal']);

// Middleware to get client IP address

app.use((req, res, next) => {

  const ipAddress = proxyaddr(req, ['loopback', 'linklocal', 'uniquelocal']);

  req.clientIP = ipAddress;

  next();

});

// Example route that uses the client IP address

app.get('/ip', (req, res) => {

  res.send(`Your IP address is: ${req.clientIP}`);

});

// Start the server

app.listen(process.env.PORT || 3000, () => {

  console.log('Server started on port 3000');

});

/*
const express = require("express");

const reqIP = require('request-ip');

const app = express();

app.get("/",(req,res)=>{

 let clip = reqIP.getClientIp(req);

 res.send("the ip address is "+clip)

})

app.listen(process.env.PORT || 3000)
*/
