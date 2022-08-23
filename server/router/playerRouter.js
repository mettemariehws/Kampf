import { Router } from "express";
import bcrypt from "bcrypt";
import db from "../db/createConnection.js";

const router = Router();

const saltRounds = 12;

router.post("/api/add-player", async (req, res) => {
  const { no, name, password, role } = req.body;

  const cryptPass = await bcrypt.hash(password, saltRounds);

  try {
    await db.run(
      `INSERT INTO users (no, name, password, role) VALUES (?,?,?,?)`,
      [no, name, cryptPass, role]
    );
    res.status(200).send();
  } catch {
    res.status(400).send();
  };
  
});

router.post("/api/update-player", async (req, res) => {});

export default router;
