const db = require('../utils/database');

exports.createCarTable = async () => {
    const sql = `CREATE TABLE IF NOT EXISTS Car (
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        model VARCHAR(255) NOT NULL,
        color VARCHAR(255) NOT NULL,
        plate VARCHAR(255) NOT NULL,
        price_per_day INT NOT NULL,
        status VARCHAR(255) NOT NULL,
        year INT NOT NULL,
        PRIMARY KEY (id),
        UNIQUE INDEX id_UNIQUE (id ASC) VISIBLE);`

    const resut = await db.execute(sql);
};