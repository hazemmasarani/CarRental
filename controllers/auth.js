const bcrypt = require('bcryptjs');
const db = require('../utils/database');

exports.getLogin = (req, res, next) => {
    res.render('Auth/Signin', {

    });
}

exports.postLogin = async (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    
    const query = `SELECT * FROM User WHERE email = "${email}";`;
    const [ rows ] = await db.query(query);
    if (rows.length > 0) {
        const checkPassword = await bcrypt.compare(password, rows[0].password);
        if (checkPassword) {
            res.status(200);
            return res.redirect('/');
        }
    }
    res.status(401);
    res.redirect('/login');
};

exports.getSignup = (req, res, next) => {
    res.render('Auth/Signup');
}

exports.postSignup = async (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    //check if email already exists
    const query = `SELECT * FROM User WHERE email = "${email}" ;`;
    const [rows, fields] = await db.query(query);
    console.log(rows.length);
    if (rows.length == 0) {
        const hashedPassword = await bcrypt.hash(password, 12);
        const query = `INSERT INTO User (email, password, username) VALUES ("${email}","${hashedPassword}", "${name}");`;
        const result = await db.query(query);
        res.status(200);
        return res.redirect('/');
    }
    
    res.redirect('/signup');
}
