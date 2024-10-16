const mongoose=require('mongoose')
const Schema=mongoose.Schema;
const ObjectId=mongoose.ObjectId;

mongoose.connect("mongodb+srv://devesh04:devesh0404@cluster0.yinli.mongodb.net/coursera-app")


const userSchema=new Schema({
    email:{type: String, unique:true},
    password: String,
    firstName:String,
    lastName:String
})

const courseSchema=new Schema({
    title:String,
    desc:String,
    price:Number,
    imageUrl:String,
    creatorId:ObjectId
})

const adminSchema=new Schema({
    email:{type: String, unique:true},
    password: String,
    firstName:String,
    lastName:String
})

const purchaseSchema=new Schema({
    courseId:ObjectId,
    userId:ObjectId

})

const userModel=mongoose.model("user",userSchema)
const adminModel=mongoose.model("admin",adminSchema)
const courseModel=mongoose.model("course",courseSchema)
const purchaseModel=mongoose.model("purchase",purchaseSchema);

module.exports={
    userModel,
    adminModel,
    courseModel,
    purchaseModel
}

