// const express=require("express");
// const Router= express.Router;

const {Router}=require('express');

const courseRouter=Router();

const mongoose=require('mongoose');

const {userMiddleware}=require("../middlewares/user")

const {purchaseModel,courseModel}=require("../db")


    courseRouter.post("/purchase",userMiddleware,async function(req,res){

        const userId=req.userId;
        const courseId=req.body.courseId;

        await purchaseModel.create({
            courseId:courseId,
            userId:userId,
        })

        res.json({
            message:"You have bought a course"
        })
        
    })
    
    courseRouter.get("/preview",async function(req,res){
        const courses=await courseModel.find({

        })
        res.json({
            courses:courses
        })
    })

    // courseRouter.get("/purchases",userMiddleware, async function(req,res){
    //     const userId=req.userId;

    //     const courses=await courseModel.find({
    //         userId

    //     })
    //     res.json({
    //         courses:courses
    //     })
    // })


module.exports={
    courseRouter:courseRouter
}