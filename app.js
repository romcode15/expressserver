const express =  require("express");
const path = require("path");
const app = express();

app.get("/",(req,res)=>{
    //llamado desde app.js
    //res.send("hello word");
    //llamado desde index html
    //res.sendFile("C:/Users/ADMIN/Desktop/expresserver/index.html");
    //llamdado automatico
    res.render(path.join(__dirname + "/index.ejs"));
});

app.listen(3000,()=>{
    console.log("server running on port", 3000);
});