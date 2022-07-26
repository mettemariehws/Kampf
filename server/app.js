import express from 'express';
const app = express();
app.use(express.json());

import cors from "cors"
app.use(cors());

import helmet from "helmet";
app.use(helmet());

import session from "express-session";
app.use(session({
  secret: 'randomKey',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

import path from "path";
app.use(express.static(path.resolve("../client/public")));

import loginRouter from "./router/userRouter.js";
app.use(loginRouter);

import playerRouter from "./router/playerRouter.js";
app.use(playerRouter);

const PORT = process.env.PORT || 3000;

app.get('*', (req, res) => {
  res.sendFile(path.resolve("../client/public/index.html"));
});

app.listen(PORT, () => {
  console.log("The server is running on port: ", PORT);
});