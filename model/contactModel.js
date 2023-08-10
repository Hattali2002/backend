const mongoose = require("mongoose"); 

const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter name feild"]
    },
    email: {
        type: String,
        required: [true, "Please enter email feild"]
    },
    phone: {
        type: String,
        required: [true, "Please enter phone feild"]
    }
},{
    timestamps: true,
  });

module.exports=mongoose.model("Contact",contactSchema);