import db from "./createConnection.js";

const isInDeleteMode = true;

if(isInDeleteMode){
    await db.exec(`DROP TABLE IF EXISTS users;`);
};

await db.exec(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    no INT(16),
    name VARCHAR(30),
    password VARCHAR(30),
    role VARCHAR(10)
);`);

await db.exec(`CREATE TABLE IF NOT EXISTS games (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    date VARCHAR(100),
    opponent VARCHAR(100),
    time VARCHAR(100),
    place VARCHAR(100)
);`);

await db.run(
    `INSERT INTO games (date, opponent, time, place) VALUES ('02.11.2022', 'Sundby', '18.00.00', 'Sundby idrætspark')`
);

db.close();

