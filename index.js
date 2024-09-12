const express = require("express");
const app = express();


// ROUTES
app.get("/api",(req,res)=>{

    return res.json({message:"hello from server"});
});


// server 
app.listen(8027,()=>{
    console.log("server started..");
});
