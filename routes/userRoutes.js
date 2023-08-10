const express=require("express");
const {userRegister,userLogin,userCurrent}=require("../controller/userController");
const router=express.Router();
const validateToken=require("../middleware/validateToken")

router.post("/register",userRegister); 

router.post("/login",userLogin); 
router.get("/current",validateToken,userCurrent); 

module.exports = router;