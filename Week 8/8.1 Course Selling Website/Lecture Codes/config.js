// Retrieve the JWT admin password from environment variables
const JWT_ADMIN_PASSWORD=process.env.JWT_ADMIN_PASSWORD; 

// Retrieve the JWT user password from environment variables
const JWT_USER_PASSWORD=process.env.JWT_USER_PASSWORD;

module.exports={
    JWT_ADMIN_PASSWORD,
    JWT_USER_PASSWORD

}