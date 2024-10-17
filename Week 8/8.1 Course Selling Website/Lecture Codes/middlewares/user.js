const jwt=require('jsonwebtoken')

const { JWT_USER_PASSWORD } = require("../config");
// console.log(JWT_USER_PASSWORD)

function userMiddleware(req,res,next){
    const token=req.headers.token;
    
    try{

        const decoded=jwt.verify(token,JWT_USER_PASSWORD);

        
            req.userId=decoded.id;
            // console.log(decoded.id)
            next();
        
        


    }
    catch(error){
        res.status(403).json({
            message:"incorrect credentials"
        })
    }
}

module.exports = {
    userMiddleware, // Exporting the middleware for use in routes
};