import mongoose from "mongoose";

const usermodel = new mongoose.Schema({
    fname:{
        type: String,
        required: true
    },
    lname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    message:{
        type: String,
        required: true
    },
})


export const User = mongoose.model("User", usermodel)