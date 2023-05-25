const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    database: 'CarReservation',
    password: ''
});


const testConnection = async () => {
    try {
        const result = await connection.query('SELECT 1+1 as test1');
        if (result) {
            console.log("connected");
        }
     } catch (err) {
        console.log(err);
    }
}

testConnection();

module.exports = connection;