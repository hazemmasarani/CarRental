const User = require('../models/user');
const Car = require('../models/car');
const Reservation = require('../models/reservation'); 

exports.defineSchema = (req, res, next) => {
    User.createUserTable();
    Car.createCarTable();
    Reservation.createReservationTable();
};