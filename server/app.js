import express from "express";
const app = express();
app.use(express.json());

import cors from "cors"
app.use(cors());

import helmet from "helmet";
app.use(helmet());

import session from "express-session";
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

import path from "path";
app.use(express.static(path.resolve("../client/public")));

import loginRouter from "./router/loginRouter.js";
app.use(loginRouter)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("The server is running on port: ", PORT);
});