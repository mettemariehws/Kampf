import db from "./createConnection.js";

const isInDeleteMode = true;

//hvorfor?
if(isInDeleteMode){
    await db.exec(`DROP TABLE IF EXISTS players;`)
};

await db.exec(`CREATE TABLE IF NOT EXISTS players (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    playerno INT(16),
    name VARCHAR(30),
    password VARCHAR(30)
    role VARCHAR(10)
)`)

db.close();

