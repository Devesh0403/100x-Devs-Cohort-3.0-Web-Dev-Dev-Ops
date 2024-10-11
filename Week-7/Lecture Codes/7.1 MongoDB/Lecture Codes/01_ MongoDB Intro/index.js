// import express and mongoose modules
const express=require('express');
const mongoose=require('mongoose')

//import userModel & todoModel from db.js file
const {UserModel,TodoModel}=require("./db")

//import jwt and create a JWT secret
const jwt=require('jsonwebtoken');
const JWT_SECRET="abcdefgh"

//import bcrypt for passwrod hashing
import bcrypt from 'bcrypt';

//connect to our mongodb cluster
mongoose.connect("mongodb+srv://devesh04:devesh0404@cluster0.yinli.mongodb.net/todo-app");

// create an instance of express
const app=express();

// Set the number of salt rounds (higher value means more secure but slower)
const saltRounds = 1;

// use express.json middleware to parse json data
app.use(express.json());

// Create a POST route for the signup endpoint
app.post("/signup",async function(req,res){
    //extract email, password,name from body headers
    const email=req.body.email;
    const password=req.body.password;
    const name=req.body.name
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // create a new user using the UserModel.create() method 
    try{
        await  UserModel.create({
            email:email,
            password:hashedPassword,
            name:name
    
        })
        
    } 
    catch(error){
        return res.status(400).json({
            message: "User already exists!",
        });
    }  


    // Send a response to the client if successfully logged in
    res.json({
        message:"You are logged in"
    })

})

// create a POST route for signin endpoint
app.post("/signin", async function(req,res){

    // Get the email and password from the request body
    const email=req.body.email;
    const password=req.body.password;
    // const name=req.body.name;
  
    // Find the user with the given email and password
    const user=await UserModel.findOne({
        email:email,
        password:password
    });
    // console.log(user);

    if(!user){
        return res.status(401).json({ message: 'User not found' });
    }


    
    const isMatch =  bcrypt.compare(password, user.password);

    if (isMatch) {
    // Create a JWT token if the password matches
    let token = jwt.sign(
        { id: user._id.toString() }, 
        JWT_SECRET, 
        { expiresIn: '1h' }  // Optional: Set token expiration time
    );

    res.json({
        token: token,
        message: 'Login successful'
    });
    } else {
    // Return error if password is incorrect
    res.status(401).json({ message: 'Invalid credentials' });
}


    
})

// create an auth  middleware
function auth(req,res,next){
    const token=req.headers.token;

    //verify the jwt token
    const decodedData=jwt.verify(token,JWT_SECRET);
    
    // if verified send the userId back to the routes
    if(decodedData){
        req.userId=decodedData.id;
        next();
    }
    else{
        res.status(403).json({
            message:"incorrect credentials"
        })
    }


}



app.post("/todo",auth, async function(req,res){
    const todo=req.body.todo;
    const done=req.body.done;
    const userId=req.userId;

    await TodoModel.create({
        todo:todo,
        userId:userId,
        done:done,
        createdAt: Date.now, 
        updatedAt: Date.now
    });

    // Send a response to the client
    res.json({
        message: "Todo created",
    });
});

app.get("/todo",auth, async function(req,res){

    const userId=req.userId;

    const todos = await TodoModel.find({
        userId,
    });

    // Send the todos to the client
    res.json({
        todos,
    });


})

app.listen(3000);