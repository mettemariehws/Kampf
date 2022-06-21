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

if (isInDeleteMode){
await db.run(`INSERT INTO users (no, name, password, role) VALUES (69,'Mette','Vuf123','trainer')`); 
}

db.close();

