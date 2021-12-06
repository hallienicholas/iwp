const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require('mysql');
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10
//const port = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }))
app.use(cors());
app.use(express.json());

//mongoose

//data schema and model

const db = mysql.createConnection({
    user: "ReactApp",
    host: "localhost",
    password: "1111",
    database: "iwpDB",
});

app.use('/loginpop', (req, res) => {
    res.send({
      token: 'test123'
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
    db.query("SELECT * FROM iwp_sensor_data LEFT JOIN iwp_sensor_calculations ON iwp_sensor_data_id=iwp_sensor_data_id_fk ORDER BY date_sensed DESC LIMIT 10", (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

app.get('/pumps', (req,res) => {
    db.query("SELECT iwp_pump_id FROM iwp_pump ORDER BY iwp_pump_id", (err, result) => {
        if (err){
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

app.get('/volume', (req, res) => {
    db.query("SELECT iwp_pump_id_fk, date_sensed, daily_volume_sum FROM iwp_sensor_data LEFT JOIN iwp_sensor_calculations ON iwp_sensor_data_id=iwp_sensor_data_id_fk WHERE iwp_pump_id_fk ='284' ORDER BY date_sensed", (err, result) => {
        if (err){
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

app.listen(3001, ()=> {
    console.log("Yay, your server is running on port 3001");
});

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

//API routes 

