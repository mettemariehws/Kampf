import { Router } from "express";
import db from "../db/createConnection.js";

const router = Router()


router.post("/api/add-game", async (req, res) => {
    const {date, opponent, time, place} = req.body;

    await db.run(`INSERT INTO gamers (date, opponent, time, place) VALUES (?,?,?,?)`, [date, opponent, time, place]);

    if(res.status == 200){
        res.send("woop woop - the game is created")
    }
    
});

router.get("/api/all-games", async (req, res) => {
    const {date, opponent, time, place} = req.body;

    await db.run(`INSERT * FROM games`);

    if(res.status == 200){
        res.send("It worked, you got all the games")
    }
    
});

export default router;