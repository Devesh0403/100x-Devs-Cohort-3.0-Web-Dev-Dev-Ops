// const express=require("express");
// const Router= express.Router;

const {Router}=require('express');

const courseRouter=Router();

const mongoose=require('mongoose');

const {userMiddleware}=require("../middlewares/user")

const {purchaseModel,courseModel}=require("../db")


    courseRouter.post("/purchase",userMiddleware, function(req,res){
        
    })
    
    courseRouter.get("/preview",function(req,res){
        res.json({
            message:"preview endpoints"
        })
    })


module.exports={
    courseRouter:courseRouter
}