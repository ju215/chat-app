const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql');

app.use(express.json());
app.use(cors());

var bcrypt = require('bcrypt');
const saltRounds = 2;


const connection = mysql.createConnection({
    host: '34.27.144.22',
    user: 'root',
    password: '%%56Hu3#PB:zdy%D',
    database: 'ti_workshop_julian',
    port: 3306
});

connection.connect((error) => {
    if (error) {
        console.error('Failed to connect to the database:', error);
    } else {
        console.log('Connected to the database');
    }
});

//Registering and storing username and password then redirecting to chat page after signing up
app.post('/regPage', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) throw err;
        const sql = 'INSERT INTO auth (username, password) VALUES (?, ?)';
        connection.query(sql, [username, hash], (err, result) => {
            if (err) throw err;
            res.send('Registered');
        });
    });
});

app.post('/loginPage', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const sql = 'SELECT * FROM auth WHERE username = ?';
    connection.query(sql, [username], (err, result) => {
       if (err) throw err;
       bcrypt.compare(password, result[0].password, (err, result) => {
        if (err) throw err;
        if (result) {
            res.send('Authentication successful')
            res.redirect('/messPage');
        } else {
            res.send('Incorrect password');
        }
       });
    });
});

app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
});