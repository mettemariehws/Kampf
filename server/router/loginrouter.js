import db from "../db/createConnection.js";
import Router from "express";
import bcrypt from "bcrypt";

const router = Router();

router.post("/api/add-player", async (req, res) => {
    const {playerno, password} = req.body;

    const cryptPass = await bcrypt.hash(password, hashPass);

    const newPlayer = await db.run("INSERT INTO players (playerno, name, password, role)");
})

router.post("/api/login", async (req, res) => {
    const {playerno, password} = req.body;
    const loginPlayer = await db.get("SELECT * FROM players WHERE playerno = ?" [playerno]); 

    if(!loginPlayer){
        res.status(400);
        return res.send("Cannot find player!");

        const comPass = bcrypt.compare(password, hashPass)
    }


})
