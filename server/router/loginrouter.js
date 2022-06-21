import db from "../db/createConnection.js";
import {Router} from "express";
import bcrypt, { compare } from "bcrypt";

const router = Router();
const saltRounds = 12;

router.post("/api/add-player", async (req, res) => {
    const {no, name, password, role} = req.body;

    const cryptPass = await bcrypt.hash(password, saltRounds);

    const {newPlayer} = await db.run(`INSERT INTO users (no, name, password, role) VALUES (?,?,?,?)`, [no, name, cryptPass, role]);
});

router.post("/api/login", async (req, res) => {
    const {no, password} = req.body;  

    let loginUser = await db.get(`SELECT * FROM users WHERE no = ?`, [no]); 
    console.log(loginUser)

    if(!loginUser){
        res.status(400);
        return res.send("Seems like the user do not exsist!");
    }

    const compPass = await bcrypt.compare(password, loginUser.password);

    if(compPass && !req.session.loggedIn){
        console.log("hej3")
        req.session.loggedIn = true; 
        req.session.no = no;
        return res.send("You have succesfully logged into the account: " + no)
    
    }else{
        console.log("hej4")
        res.status(401);
        res.send("IT DID NOT WORK")
       
    }
});

export default router;
