const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

//const db = require('./utils/database');
//const dbSchema = require('./utils/schema');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');
const authRoutes = require('./routes/auth');



app.use('/admin', adminRoutes);
app.use('/', userRoutes);
app.use('/', authRoutes);

//dbSchema.defineSchema();

app.listen(3000);
