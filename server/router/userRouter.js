import db from "../db/createConnection.js";
import {Router} from "express";
import bcrypt from "bcrypt";

const router = Router();

router.post("/api/login", async (req, res) => {
    const {no, password} = req.body.user;  

    try{
    let loginUser = await db.get(`SELECT * FROM users WHERE no = ?`, [no]); 
    const compPass = await bcrypt.compare(password, loginUser.password);

    if(compPass && !req.session.loggedIn){
        req.session.loggedIn = true; 
        req.session.no = no;
        res.send({loginUser});
        return 
    }
    else if(req.session.loggedIn){
        res.send("You are already in!")
        return
    } 
        res.status(401);
        res.send("Unauthorized :-(")
    
    }catch{
        console.log("not found hiih")
        res.status(404)
    }
});

router.get("/api/logout", (req, res) => {
      req.session.loggedIn = false;
      res.send("Logged out");
      return
  });

export default router;
