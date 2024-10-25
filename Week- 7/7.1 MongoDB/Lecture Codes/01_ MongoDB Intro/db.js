const mongoose=require('mongoose');

mongoose.connect("mongodb+srv://devesh04:devesh0404@cluster0.yinli.mongodb.net/coursera-app")
const Schema=mongoose.Schema;
const ObjectId=mongoose.ObjectId;

const User=new Schema({
    email:{type: String, unique:true},
    password:String,
    name:String
})

const Todo=new Schema({
    title:String,
    done:Boolean,
    userId:ObjectId,
    // timestamps: true 
})

const UserModel=mongoose.model('users',User);
const TodoModel=mongoose.model('todos',Todo);

module.exports={
    UserModel:UserModel,
    TodoModel:TodoModel
}