// const express=require('express');
// const Router=express.Router;
const express=require('express')
const mongoose=require('mongoose');

// mongoose.connect("mongodb+srv://devesh04:devesh0404@cluster0.yinli.mongodb.net/coursera-app");


const {Router}=require("express");
const { userModel } = require("../db");

//Import userMiddleware to authenticate and authorize users before allowing access to routes
const { userMiddleware } = require("../middleware/user");


const jwt=require('jsonwebtoken');
const JWT_SECRET="abcd";

const bcrypt=require('bcrypt');

const app=express();

const {z}=require('zod')

const userRouter=Router();

const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
const uppercaseRegex = /[A-Z]/;
const lowercaseRegex = /[a-z]/;





    userRouter.post("/signup",async function(req,res){

        const requiredBody=z.object({
            email:z.string().min(3).max(100).email(),
            firstName:z.string().min(3).max(30),
            lastName:z.string().min(3).max(30),
            password:z.string().min(3).max(30).refine((value) => 
                specialCharRegex.test(value) && 
                uppercaseRegex.test(value) && 
                lowercaseRegex.test(value), 
                {
                  message: "Must contain at least one special character, one uppercase letter, and one lowercase letter",
                })
        }) 

        const parsedDataWithSuccess=requiredBody.safeParse(req.body);
        
        if(!parsedDataWithSuccess.success){
            res.json({
                message:"Incorrect Format",
                error:parsedDataWithSuccess.error
            })
            return
        }
        
        console.log(req.body)
        const{firstName,lastName,email,password}=req.body;

        let errorThrown=false;

        try{
            const hashedPassword=await bcrypt.hash(password,4)
            await userModel.create({
                firstName:firstName,
                lastName:lastName,
                email:email,
                password:hashedPassword
            })
        }
        catch(error){
            errorThrown=true;
            return res.status(403).json({
                message:"user already exists"
            })

        }

        if(!errorThrown){

            res.json({
                message:"You are logged in"
            })
        }
        
    })
    
    userRouter.post("/signin",async function(req,res){
    

        const{email,password}=req.body;
        // const name=req.body.name;

        const user=await userModel.findOne({
            email:email,
            
        });

        if(!user){
            return res.status(401).json({ message: 'User not found' });
        }

        const isMatch=await bcrypt.compare(password,user.password)
        
        if(isMatch){
            let token=jwt.sign({
                id:user._id.toString()
            },JWT_SECRET)
            
            res.json({
                token:token,
                message:'Login successful'
            })
        }


    })
    
    userRouter.get("/purchases",userMiddleware, function(req,res){


        
    })




module.exports={
    userRouter:userRouter
}