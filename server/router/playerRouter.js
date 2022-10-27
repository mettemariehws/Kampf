import { Router } from "express";
import bcrypt from "bcrypt";
import db from "../db/createConnection.js";

const router = Router();

const saltRounds = 12;

router.get("/api/get-all-players", async (req, res) =>{
  let users = await db.all(`SELECT * FROM users`);
  res.send(users);
});

router.post("/api/add-player", async (req, res) => {
  const { no, name, email, password, role } = req.body;

  const cryptPass = await bcrypt.hash(password, saltRounds);

  try {
    await db.run(
      `INSERT INTO users (no, name, email, password, role) VALUES (?,?,?,?,?)`,
      [no, name, email, cryptPass, role]
    );
    res.status(200).send();
  } catch {
    res.status(400).send();
  };
  
});

router.put("/api/update-player", async (req, res) => {
  //const {id} = parseInt(req.body.id)
  const {id, no, name, email} = req.body;

  try{
    console.log("du var her også")
    await db.run(`UPDATE users SET no = $1, name = $2, email = $3 WHERE id = $4`,
    [no, name, email, parseInt(id)]);
    res.status(200).send();
  }catch{
    res.status(400).send();
    console.log("du endte i bad request")
  }
});

router.delete("/api/delete-player", async (req, res) => {
  const id = req.body.id;

  try{
    await db.run(`DELETE FROM users WHERE id = ${id}`);
    res.status(200).send();
    return;
  }catch{
    res.status(400).send();
    return;
  }

});

export default router;
