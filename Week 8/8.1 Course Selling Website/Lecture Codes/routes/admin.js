const express=require('express')
const mongoose=require('mongoose');


const {Router}=require('express');
const adminRouter=Router();

const {adminModel,courseModel }=require("../db");

const { adminMiddleware } = require("../middlewares/admin");

const jwt = require("jsonwebtoken");
const  {JWT_ADMIN_PASSWORD}  = require("../config")

const bcrypt = require("bcrypt");

const app=express();

const {z} = require("zod");

// adminRouter.get("/",function(req,res){
//     console.log(1)
// })

const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
const uppercaseRegex = /[A-Z]/;
const lowercaseRegex = /[a-z]/;




adminRouter.post("/signup",async function(req,res){

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
        await adminModel.create({
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

adminRouter.post("/signin",async function(req,res){
    
    const{email,password}=req.body;
        // const name=req.body.name;

        const user=await adminModel.findOne ({
            email:email,
            
        });

        if(!user){
            return res.status(401).json({ message: 'User not found' });
        }

        const isMatch=await bcrypt.compare(password,user.password)
        
        if(isMatch){
            let token=jwt.sign({
                id:user._id.toString()
            },JWT_ADMIN_PASSWORD)

            //cookie based authentication
            
            res.json({
                token:token,
                message:'Login successful'
            })
        }
        else{
            res.status(403).json({
                message:"incorrect password"
            })
        }

})

adminRouter.post("/course",adminMiddleware,async function(req,res){
    const adminId=req.userId;

    const {title,desc,imageUrl,price}=req.body;

    const course=await courseModel.create({
        title, desc,imageUrl,price,creatorId:adminId
    })

    res.json({
        message:"Course created",
        courseId:course._id
    })
})
adminRouter.put("/course",adminMiddleware,async function(req,res){
    const adminId=req.userId;

    const {title,desc,imageUrl,price,courseId}=req.body;

    const course=await courseModel.updateOne({
        _id:courseId,
        creatorId:adminId

    },{
        title:title,
        desc:desc,
        imageUrl:imageUrl,
        price:price


    })

    res.json({
        message:"course updated",
        courseId:course._id
    })


    
})

adminRouter.get("/course/bulk",adminMiddleware, async function(req,res){

    const adminId=req.userId;

    const courses=await adminModel.find({
        courseId:adminId

    })
    console.log(courses)
    res.json({
        message:"Courses found",
        creatorId:courses
    })
    
})

module.exports={
    adminRouter:adminRouter
}