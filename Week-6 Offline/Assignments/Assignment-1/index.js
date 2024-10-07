/** 
 * Assignment #1 - Write a function that takes in a username and password and returns a JWT token with the 
 * username encoded. Should return null if the username is not avalid email or if 
 * the password is less than 6 characters. Try using the zod library here
 * /


/**
 * Assignment #2 - Write a function that takes a jwt as input and returns 
 * true if the jwt can be DECODED (not verified). Return false otherwise
 */

/**
 * Assignment #3 - Write a function that takes a jwt as input and returns
 * true if the jwt can be VERIFIED. Return false otherewise
 */

const jwt=require("jsonwebtoken")
const zod = require("zod");


const JWT_SECRET = "secret";

const emailSchema=zod.string().email();
const passwordSchema=zod.string().min(6);

function signJwt(email,password){

    const emailResponse=emailSchema.safeParse(email);
    const passwordResponse=passwordSchema.safeParse(password);

    if(!emailResponse.success||!passwordResponse.success){
        return null;
    }



    const signature=jwt.sign({
        email
        
    },JWT_SECRET)
    return signature;


}

function decodeJwt(token){

    const decoded=jwt.decode(token);
    return decoded;

}

function verifyJwt(token,JWT_SECRET){
    const verified=jwt.verify(token,JWT_SECRET);
    return verified
}



const ans1 = signJwt("deveshaaa@gmail.com", "abcdefa");
console.log(ans1);

const ans2=decodeJwt(ans1);
console.log(ans2);

const ans3=verifyJwt(ans1,JWT_SECRET)
console.log(ans3);


