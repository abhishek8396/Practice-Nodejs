const route = require("express").Router();

route.get("/api/login", (req, res)=>{
    res.send("Hello world")
})
module.exports=route