import express from "express"
import bodyParser from "body-parser";

const app=express()


// app.use(express.json());
app.use(bodyParser.json());
//to parse json body content. 
//whenever you wish to access req.body you need to parse it using either of the two commands above

app.post("/sum",function (req,res){
    console.log(req.body)
    const a=parseInt(req.body.a)
    const b=parseInt(req.body.b)
    res.json({
        ans:a+b
    })
})

app.listen(3000)
