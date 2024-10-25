const jwt=require('jsonwebtoken');

const JWT_SECRET="iLovePriya";

const value={
    name:"devesh",
    age:20
}

const token=jwt.sign(value,JWT_SECRET);
// console.log(token)

const decodedValue=jwt.decode(token);
// console.log(decodedValue)

const verifiedValue=jwt.verify(token,JWT_SECRET);
console.log(verifiedValue)