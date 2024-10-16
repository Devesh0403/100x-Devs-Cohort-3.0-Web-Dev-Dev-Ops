const {Router}=require('express');

const adminRouter=Router();

const {adminModel}=require("../db")

adminRouter.post("/signup",function(req,res){
    res.json({
        message:"signup endpoint"
    })
})

adminRouter.post("/signin",function(req,res){
    res.json({
        message:"signin endpoint"
    })
})

adminRouter.put("/",function(req,res){
    res.json({
        message:"preview endpoints"
    })
})
adminRouter.post("/",function(req,res){
    res.json({
        message:"Courses endpoint"
    })
})

adminRouter.get("/bulk",function(req,res){
    res.json({
        message:"Courses endpoint"
    })
})

module.exports={
    adminRouter:adminRouter
}