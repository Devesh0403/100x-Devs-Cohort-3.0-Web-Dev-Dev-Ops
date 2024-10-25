const jwt=require('jsonwebtoken')

const  {JWT_ADMIN_PASSWORD}  = require("../config")

function adminMiddleware(req,res,next){
    const token=req.headers.token;
    
    try{

        const decoded=jwt.verify(token,JWT_ADMIN_PASSWORD);

        
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
    adminMiddleware, // Exporting the middleware for use in routes
};