

import express from "express"
import cors from "cors"
import mongoose from "mongoose";
import dotenv from "dotenv"
import router from "./Route/userRoute.js";



const app = express();
dotenv.config();

const connect = async() => {
    try {
        await mongoose.connect(process.env.MONGO)
        console.log("successsully connected to Mongodb");
        
    } catch (err) {
        console.log(err);
        console.log("failed to connect Mongodb");
    }

}

app.use(express.json());
app.use(cors({origin: "http://localhost:3000", credentials:true}));

app.use("/api/user", router)

app.listen(process.env.PORT, () => {connect();
    console.log("connected to server");
    
})
 