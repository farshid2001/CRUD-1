import express from "express";
import { addUser,getUser,updateUser,deleteUser } from "../Condroller/userFunction.js";


const router = express.Router();

router.post("/addUser", addUser);
router.get("/fetchUser",getUser);
router.put("/updateUser/:id",updateUser);
router.delete("/deleteUser/:id",deleteUser);

export default router