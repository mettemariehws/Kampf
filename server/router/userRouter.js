import db from "../db/createConnection.js";
import {Router} from "express";
import bcrypt, { compare } from "bcrypt";
import session from "express-session";

const router = Router();
const saltRounds = 12;
let sess;


router.post("/api/login", async (req, res) => {
    const {no, password} = req.body;  

    try{
    let loginUser = await db.get(`SELECT * FROM users WHERE no = ?`, [no]); 
    const compPass = await bcrypt.compare(password, loginUser.password);

    if(compPass && !req.session.loggedIn){
        req.session.loggedIn = true; 
        req.session.no = no;
        return res.json({loginUser});
    }
    else if(req.session.loggedIn){
        return res.send("You are already in!")
    }
        res.status(401);
        res.send("Unauthorized :-(")
    
    }catch{
        console.log("not found hiih")
        return res.status(404)
    }
});

router.get("/api/logout", (req, res) => {
    if (req.session.loggedIn) {
      req.session.loggedIn = false;
      req.session.username = null;
      return res.send("Logged out");
    }
  
    res.send("You're not logged in");
  });

export default router;
