import Router from "express";
import bcrypt from "bcrypt";

const router = Router();

const saltRounds = 12;  

router.post("/api/add-player", async (req, res) =>{
    const [playerno, password] = req.body;

    const cryptPass = await bcrypt.hash(password, saltRounds);

    const {addedUser} = db.run("INSERT INTO players (playerno, password) VALUES (?,?)", [playerno,cryptPass]);
});