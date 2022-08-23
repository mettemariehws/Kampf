import { Router } from "express";
import db from "../db/createConnection.js";

const router = Router();

router.get("/api/all-games", async (req, res) => {
  const games = await db.all(`SELECT * FROM games`);
  res.send(games);
});

router.post("/api/add-game", async (req, res) => {
  const { date, opponent, time, place } = req.body;

  await db.run(
    `INSERT INTO games (date, opponent, time, place, attendees) VALUES (?,?,?,?,?)`,
    [date, opponent, time, place, 0]
  );
});

router.put("/api/update-attendee", async (req, res) => {
  const { id, change } = req.body;

  let query = `UPDATE games SET attendees = attendees${change} WHERE id = ${id}`;
  await db.run(query);
  
});

export default router;
