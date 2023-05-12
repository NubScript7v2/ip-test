const express = require("express");

const reqIP = require('request-ip');

const app = express();

app.get("/",(req,res)=>{

 let clip = reqIP.getClientIp(req);

 res.send("the ip address is "+clip)

})

app.listen(process.env.PORT || 3000)
