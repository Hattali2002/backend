const mongoose = require("mongoose"); 

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please enter Username feild"]
    },
    email: {
        type: String,
        unique:[true,"Email Already Exists"],
        required: [true, "Please enter email feild"]
    },
    password: {
        type: String,
        required: [true, "Please enter Password feild"]
    }
},{
    timestamps: true,
  });

module.exports=mongoose.model("User",UserSchema);