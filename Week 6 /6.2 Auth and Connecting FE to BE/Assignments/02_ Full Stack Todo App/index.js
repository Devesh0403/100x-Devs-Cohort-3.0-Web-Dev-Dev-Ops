const express=require("express");
const jwt=require("jsonwebtoken");

const app=express();
app.use(express.json());

let todos=[];

function auth(req,res,next){
    const token=req.headers.token;
    const decodedData=jwt.verify(token,JWT_SECRET);

    if(decodedData.username){
        req.username=decodedData.username;
        //to send to the /me endpoint.
        // manipulating the req object
        next();
    }

    else{
        res.json({
            message:"Invalid user"
        })
    }

}

app.get("/",function(req,res){
    res.sendFile(__dirname+"/public/index.html")
})

app.post("/add",auth,function(req,res){


})


