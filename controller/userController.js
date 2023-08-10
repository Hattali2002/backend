const express = require("express");
const asyncHandler = require("express-async-handler");
const user=require("../model/userModel");
const jwt=require("jsonwebtoken");
const bcrypt =require("bcrypt");


//////////////////////////// Register /////////////////////////////////////////////
const userRegister = asyncHandler(async (req,res)=>{ 
    const {username,email,password}=req.body;
    // console.log(req.body);
    if(!username || !email || !password){
       return res.status(404).json({message :"please enter all the feilds"});
    } 
    const User = await user.findOne({email:email});

    if(User){
        // console.log(User)
        return res.json({message:"User Already Exist"});
    }
    const hashedPassword=await bcrypt.hash(password,10);
    // console.log(hashedPassword)
    const userdata=await user.create({
        username,
        email,
        password:hashedPassword
    });
    return res.json({message: "User Registered Successfully"});
});

//////////////////////////// UserLogin /////////////////////////////////////////////
const userLogin = asyncHandler(async (req,res)=>{
    const {email,password}=req.body;
    // console.log(req.body);
    if( !email || !password){
       return res.status(404).json({message :"please enter all the feilds"});
    } 
    
    const User=await user.findOne({email:email});
    if(User && (await bcrypt.compare(password,User.password))){
        const accessToken= jwt.sign({
            user:{
                email:user.email,
                username:user.username,
                id:user.id
            },
        },
            process.env.ACCESS_TOKEN_SECREATE,
            {
                expiresIn:"1m"
            }
        );
        return res.json({accessToken});
    }

    return res.json({message:"Login failed"});
});

//////////////////////////// UserCurrent /////////////////////////////////////////////
const userCurrent = asyncHandler(async (req,res)=>{
    res.json({message:"current User"});
});

module.exports={userRegister,userLogin,userCurrent}