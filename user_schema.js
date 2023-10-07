import mongoose from "mongoose";


//how to create schema from mongoose
const user_schema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,'Name is required'],
            maxLength:[50,"Name should be less than 50 character"]
        }, 

        email:{
            type:String,
            unique: true
        },

        userName:{
            type:String,
            unique: true
        },

        password:String,
        age:Number
    }
    );

export default mongoose.model("User",user_schema)