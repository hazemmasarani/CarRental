const db = require('../utils/database');

exports.createReservationTable = async () => {
    const sql = `
        CREATE TABLE IF NOT EXISTS Reservation (
        id INT NOT NULL AUTO_INCREMENT,
        reserve_date DATE NOT NULL,
        pickup_date DATE NOT NULL,
        return_date DATE NOT NULL,
        userId INT NOT NULL,
        carId INT NOT NULL,
        payement_status VARCHAR(255) NOT NULL,
        payement INT NOT NULL,
        PRIMARY KEY (id),
        FOREIGN KEY (userId) REFERENCES User(id),
        FOREIGN KEY (carId) REFERENCES Car(id),
        UNIQUE INDEX id_UNIQUE (id ASC) VISIBLE);
    `;
    const result = await db.execute(sql);
}