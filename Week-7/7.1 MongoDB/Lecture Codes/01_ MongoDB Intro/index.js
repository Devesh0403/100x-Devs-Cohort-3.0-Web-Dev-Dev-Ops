const express=require('express');
const mongoose=require('mongoose')
const {UserModel,TodoModel}=require("./db")
const jwt=require('jsonwebtoken');
const JWT_SECRET="abcdefgh"

mongoose.connect("mongodb+srv://devesh04:devesh0404@cluster0.yinli.mongodb.net/todo-app");

const app=express();
app.use(express.json());

app.post("/signup",async function(req,res){
    const email=req.body.email;
    const password=req.body.password;
    const name=req.body.name

    await  UserModel.create({
        email:email,
        password:password,
        name:name

    })
    res.json({
        message:"You are logged in"
    })

})


app.post("/signin", async function(req,res){
    const email=req.body.email;
    const password=req.body.password;
    // const name=req.body.name;

    const user=await UserModel.findOne({
        email:email,
        password:password
    });
    console.log(user);

    if(user){
        console.log({id:user._id.toString()})
        let token=jwt.sign({
            id:user._id.toString()
        },JWT_SECRET);
        res.json({
            token:token
            

        })

    }
    else{
        res.status(403).json({
            message:"Invalid credentials"
        })
    }


    
})

function auth(req,res,next){
    const token=req.headers.token;

    const decodedData=jwt.verify(token,JWT_SECRET);

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

    res.json({
        userId:userId
    })

    



    
})

app.get("/todos",auth, function(req,res){

})

app.listen(3000);