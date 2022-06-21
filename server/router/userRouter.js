import Router from "express";
import bcrypt from "bcrypt";

const router = Router();

const saltRounds = 12;  

router.post("/api/add-player", async (req, res) =>{
    const [no, name, password, role] = req.body;

    const cryptPass = await bcrypt.hash(password, saltRounds);

    const {addedUser} = db.run("INSERT INTO users (no, name, password, role) VALUES (?,?,?,?)", [no, name, cryptPass, role]);
});