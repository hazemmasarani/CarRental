const db = require('../utils/database');

exports.createUserTable = async () => {
    const sql = `CREATE TABLE IF NOT EXISTS User (
        id INT NOT NULL AUTO_INCREMENT,
        email VARCHAR(255) NOT NULL,
        password TEXT NOT NULL,
        username VARCHAR(255) NOT NULL,
        PRIMARY KEY (id),
        UNIQUE INDEX id_UNIQUE (id ASC) VISIBLE);`

    const result = await db.query(sql);
};