// const express = require("express");
// const bodyParser= require("body-parser")
// const app = express();
// const route= require("./Route/routes");
// const data = require("./Route/data")
// app.use(bodyParser.json)
// app.use(bodyParser.urlencoded({extended:false}));
// app.use("/", route);

// app.get("/", (req, res)=>{
//     const datalist= data.list();
//     res.send(datalist)
// })
// app.post("/signup", (req, res)=>{
//     const user = req.body
//     res.send(user)
// })

// app.listen(5000, ()=>{
//     console.log("Server is running")
// })




// const express= require("express")
// const app = express();
// const bodyParser= require('body-parser')
// const cors = require("cors")
// app.use(cors())
// app.use(bodyParser.urlencoded({extended:false}))
// app.use(bodyParser.json())
// const arr = []

// app.post("/signup", async(req, res)=>{
//     const name = req.body.name
//     const pwd = req.body.pwd
//     const user ={
//         name: name,
//         pwd : pwd
//     }
//     arr.push(user)
    
//     await res.send(arr)
    
// })
// app.post("/login", async(req, res)=>{
//     await arr.forEach((item) => {
//         if(item.name==req.body.name && item.pwd==req.body.pwd){
//             res.send("succesfully login")
//         }else{
//             res.send("unseccfully login")
//         }
//     });
// })


// app.listen(5000, ()=>{
//     console.log("Server is running")
// })


























// const express=require("express")
// const app=express()
// const PORT=8080
// const cors=require("cors")
// const bcrypt=require("bcrypt")
// app.use(cors())
// const body=require("body-parser")
// app.use(body.urlencoded({extended:false}))
// app.use(body.json())
// const arr=[]



// app.post("/",async(req,res)=>{
//     const saltround=10
//     const name=req.body.name
//     const  email=req.body.email
//     const  pwd=req.body.pwd
    
//     const hasepwd= await bcrypt.hash(pwd,saltround)
//     const result={
//         name:name,
//         email:email,
//         pwd:hasepwd
//     }
    
//     arr.push(result)
//     res.send(arr)
    
// })



// app.post("/login",async(req,res)=>{
//  await arr.forEach((item)=>{
//     if(item.name==req.body.name){
//         bcrypt.compare(req.body.pwd,item.pwd,(err,valid)=>{
//             if(err){
//                 res.send("error first if")
//             }
//             if(valid==false){
//                 res.send("invalid input")
//             }else{
//                 res.send("sucessful")
//             }
//         })
//     }
//  })
// })

// app.listen(PORT,()=>{
//     console.log(`server running on ${PORT}`)
// })


//jWt token

const express= require("express");
const app = express();
const jwt = require("Jsonwebtoken")

const secretkey = "abcd"

app.post("/login", (req, res)=>{
    const user= {
        username: "Naman",
        email: "Naman@gmail.com"
    }
    jwt.sign({user}, secretkey, {expiresIn:"300s"}, (err, token)=>{
        res.json({
            token
        })
    })
})
app.post("/profile", verifytoken, (req, res)=>{
    jwt.verify(req.token, secretkey, (err, authdata)=>{
        if(err){
            res.send("Invalid")
        }else{
            res.json({
                message: "profile Access",
                authdata: authdata
            })
        }
})
})
function verifytoken(req, res, next){
    const bearedHeader= req.header["authorization"]
    if(typeof bearedHeader !== 'undefined'){
        const bearer = bearedHeader.split(" ")
        const token = bearer[1];
        req.token= token
        next();
    }else{
        res.send("Token is not valid")
    }
}

app.listen(5000, ()=>{
    console.log("server is running")
})



// const express = require("express")
// const app = express();
// const cors = require("cors")
// app.use(cors());

// const middleware = function(req, res, next){
//     console.log("this is middleware")
//     next();
// }

// app.get("/", middleware, (req, res)=>{
//     res.send("Hello world")
// })

// app.listen(5000, ()=>{
//     console.log("Server is runnimng")
// })