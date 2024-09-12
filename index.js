const express = require("express");
const app = express();


// ROUTES
app.get("/api",(req,res)=>{

    return res.json({message:"hello from server"});
});

app.get("/api/owner",(req,res)=>{

    return res.json({message:"hello from server x1 "});
});


// server 
app.listen(8027,()=>{
    console.log("server started..");
});
