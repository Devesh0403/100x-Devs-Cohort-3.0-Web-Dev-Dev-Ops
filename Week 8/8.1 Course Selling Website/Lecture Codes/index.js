const express= require('express');
const mongoose=require("mongoose");

// const {createUserRoutes}=require("./routes/user");
// const {createCourseRoutes}=require("./routes/user");

const {userRouter}=require("./routes/user")
const {courseRouter}=require("./routes/course")
const {adminRouter}=require("./routes/admin")


const app= express();
app.use(express.json());


// createUserRoutes(app);
// createCourseRoutes(app)

app.use("/api/v1/user",userRouter);
app.use("api/v1/admin",adminRouter);
app.use("/api/v1/course",courseRouter);


async function main(){
    await mongoose.connect("mongodb+srv://devesh04:devesh0404@cluster0.yinli.mongodb.net/coursera-app")
    app.listen(3000);
    console.log("Listening on port 3000");


}

main();


