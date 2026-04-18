import mongoose from "mongoose"
const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
            lowercase: true
        },
        password: {
            type: String,
            required: true,
            minlength:6
        },
        role:{
            type:String,
            enum:["user" , "admin"],
            default:"user",
        },
        company:{
            type:String,
            default:""
        },
        phone:{
            type:String,
            default:""
        }
    },{
        timestamps:true,
    });

const User = mongoose.model("User", userSchema);

export default User;