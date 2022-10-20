import { Router } from "express";
import db from "../db/createConnection.js";

const router = Router();

router.get("/api/all-games", async (req, res) => {
  let games = await db.all(`SELECT * FROM games`)
  for(let game of games){
    game.users = await db.all(`SELECT * FROM playerGameRelation AS p WHERE p.gameId = ${game.id}`
    )};
  console.log(games)
  res.send(games);
});

router.post("/api/add-game", async (req, res) => {
  const { date, opponent, time, place } = req.body;

  await db.run(
    `INSERT INTO games (date, opponent, time, place, attendees) VALUES (?,?,?,?,?)`,
    [date, opponent, time, place, 0]
  );
});

router.post("/api/update-attendee", async (req, res) => {
  const { gameId, userId } = req.body;

  try {
    await db.run (
      `INSERT INTO playerGameRelation (gameId, userId) VALUES (?,?)`, 
    [gameId, userId]
    );
    res.status(200).send();
  } catch {
    res.status(400).send();
  }
});

router.delete("/api/delete-attendee", async(req, res) => {
  const { gameId, userId } = req.body;

  try{
    await db.run ( 
      `DELETE FROM playerGameRelation AS p WHERE p.gameId = ${gameId}  AND p.userId = ${userId}`
    );
    res.status(200).send();
  } catch {
    res.status(400).send();
  }
});

export default router;
