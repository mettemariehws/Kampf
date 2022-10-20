import db from "./createConnection.js";

const isInDeleteMode = true;

if (isInDeleteMode) {
  await db.exec(`DROP TABLE IF EXISTS users;`);
}

await db.exec(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    no INT(16),
    name VARCHAR(30),
    password VARCHAR(30),
    role VARCHAR(10)
);`);

await db.exec(`CREATE TABLE IF NOT EXISTS games (
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    date VARCHAR(100),
    opponent VARCHAR(100),
    time VARCHAR(100),
    place VARCHAR(100),
    attendees INT(16)
);`);

await db.exec (`CREATE TABLE IF NOT EXISTS playerGameRelation (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  gameId INTEGER(200),
  userId INTEGER(200),
  FOREIGN KEY(gameId) REFERENCES games(id),
  FOREIGN KEY(userId) REFERENCES users(id)
);`);

await db.run(
  `INSERT INTO games (date, opponent, time, place, attendees) VALUES ('03.04.2022', 'Sundby', '18.00.00', 'Sundby idrætspark', 0)`
);

await db.run(
  `INSERT INTO games (date, opponent, time, place, attendees) VALUES ('02.05.2022', 'Vanløse if', '20.00.00', 'Vanløse idrætspark', 0)`
);

await db.run(
  `INSERT INTO games (date, opponent, time, place, attendees) VALUES ('05.05.2022', 'Valby', '10.00.00', 'Valby idrætspark', 0)`
);

await db.run(
  `INSERT INTO games (date, opponent, time, place, attendees) VALUES ('10.06.2022', 'GOG', '18.00.00', 'Sundby idrætspark', 0)`
);
await db.run(
  `INSERT INTO games (date, opponent, time, place, attendees) VALUES ('11.07.2022', 'Rødovre', '12.00.00', 'Rødovre idrætspark', 0)`
);
await db.run(
  `INSERT INTO games (date, opponent, time, place, attendees) VALUES ('04.08.2022', 'Endeslev if', '11.00.00', 'Endeslev idrætspark', 0)`
);

db.close();
