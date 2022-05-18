import db from "../db/createConnection.js";
import Router from "express";
import bcrypt from "bcrypt";

const router = Router();

router.post("/api/login", async (req, res) => {
    const {playerno, password, role} = req.body;
    const loginUser = await db.get("SELECT * FROM player WHERE playerno, role = ?,?" [playerno, role]); 

    if(!loginUser){
        res.status(400);
        return res.send("Cannot find user!");
    }


})
