const express=require("express");
const jwt=require("jsonwebtoken");

const app=express();

app.get("/",function(req,res){
    res.sendFile(__dirname+"/public/index.html")
})