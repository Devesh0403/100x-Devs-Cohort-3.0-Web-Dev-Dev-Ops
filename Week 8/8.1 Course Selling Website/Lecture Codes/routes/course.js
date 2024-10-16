// const express=require("express");
// const Router= express.Router;

const {Router}=require('express');

const courseRouter=Router();


    courseRouter.post("/purchase",function(req,res){
        res.json({
            message:"purchase endpoints"
        })
    })
    
    courseRouter.get("/preview",function(req,res){
        res.json({
            message:"preview endpoints"
        })
    })


module.exports={
    courseRouter:courseRouter
}