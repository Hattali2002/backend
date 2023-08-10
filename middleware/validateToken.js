const asyncHandler = require("express-async-handler");
const jwt=require("jsonwebtoken")


const validateToken = asyncHandler(async (req, res, next) => {
    auth = req.headers.Authorization || req.headers.authorization
    if (auth && auth.startsWith("Bearer")) {
        token = auth.split(" ")[1]; 
        console.log(token);

        data = jwt.verify(token, process.env.ACCESS_TOKEN_SECREATE,(err, decoded) => {
            if (err) {
              return res.status(401).json({message :"User is not authorized"});
            }
            req.user = decoded.user;
            next();
          });

        if(!token){
            return res.status(401).json({message :"Token not Found"});
        }
    }
});

module.exports=validateToken;