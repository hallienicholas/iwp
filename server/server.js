const express = require("express");
const app = express();
//const bodyParser = require("body-parser");
const mysql = require('mysql');
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");

const bodyParser = require("body-parser");
const cookieParser = require ("cookie-parser");
const session = require ("express-session");

const bcrypt = require("bcrypt");
const saltRounds = 10
//const port = process.env.PORT || 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
}));

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true}));

app.use(
    session({
        key: "userId",
        secret: "fp9834ou-0wipfoejn",
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 60 * 60 * 24,
        },
    })
);

//database
const db = mysql.createConnection({
    user: "ReactApp",
    host: "localhost",
    password: "1111",
    database: "iwpDB",
});

app.use('/loginpop', (req, res) => {
    res.send({
      token: 'SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
    });
  });


app.post('/register', (req, res) => {
    
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const username = req.body.username;
    const password = req.body.password;

    bcrypt.hash(password,saltRounds, (err, hash) => {
        
        if (err) {
            console.log(err)
        }

        db.query(
            "INSERT INTO iwp_user (user_first_name, user_last_name, user_email, user_password, iwp_access_level, iwp_user_activated, iwp_user_photograph, iwp_user_preferred_communication_method) VALUES (?,?,?,?,5,0,'n/a','email')", 
            [firstname, lastname, username, hash],
            (err, result) => {
                console.log(err);
            }
        );
    })
});
  
app.get('/data', (req,res) => {
    db.query("SELECT * FROM iwp_sensor_data ORDER BY date_sensed DESC LIMIT 10", (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

app.get("login", (req, res) => {
    if (req.session.user) {
        res.send({loggedIn: true, user: req.session.user})
    } else {
        res.send({loggedIn: false})
    }
})

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    
    db.query(
        "SELECT * FROM iwp_user WHERE user_email = ?;",
        username,
        (err, result) => {
            if (err) {
                res.send({err: err});
            }

            if (result.length > 0){
               bcrypt.compare(password, result[0].user_password, (error, response) => {
                   if(response) {
                       req.session.user = result;
                       console.log(req.session.user);
                       res.send(result);
                   } else {
                       res.send({message: "Wrong username/password combination" });
                   }
               }); 
            } else {
                res.send({ message: "User does not exist"});
            }
        }
    );
});

app.listen(3001, ()=> {
    console.log("Yay, your server is running on port 3001");
});

//API routes 

