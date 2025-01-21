import { Schema, model } from "mongoose";

const userShema = Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: true
    },
},{timestamps:true}
);

const userShemaModel = model("User" , userShema);

export default userShemaModel