//const jwt = require('jsonwebtoken')

const express = require('express');
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

// email handling
const nodemailer = require("nodemailer");
const {v4: uuidv4} = require("uuid");
const e = require('express');
require("dotenv").config();
let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.AUTH_EMAIL,
        pass: process.env.AUTH_PASS,
    }
})

//is ready for messages?
transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Ready for messages");
        console.log(success);
    }
});


app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors({
    origin: [process.env.HOST_URL],
    methods: ["GET", "POST"],
    credentials: true
}));

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true}));

//session
app.use(
    session({
        key: "userId",
        secret: process.env.SESSION_SEC,
        resave: false,
        saveUninitialized: false,
        cookie: {
            // 1000 * 60 * 24
            expires: 60 * 60 * 24,
        },
    })
);

//database
const db = mysql.createConnection({
    user: "ReactApp",
    host: "localhost",
    password: process.env.PASS_DB,
    database: process.env.DB_NAME,
});

//app.use('/loginpop', (req, res) => {
//    res.send({
//      token: 'SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
//    });
//  });

const sendVerificationEmail = (username, res) => {
    // verification url
    const currentUrl = process.env.HOST_URL;
    const uniqueString = process.env.VER_STRING;

    console.log(username);
    const mailOptions = {
        from: process.env.AUTH_EMAIL,
        to : username,
        subject: "Verify Your Intelligent Water Account",
        html: '<p>Verify your email address to complete signup process.</p><p> This link will expire in 10 minutes.</p><p>Click <a href="http://localhost:3000">here</a> to verify</p>',
    };
    transporter
        .sendMail(mailOptions)
        .then(() => {
        // email sent
            res.json({
                status:"Pending",
                message: "Verification email sent",
            });
        });
};
//reset password
app.post('/sendPasswordResetEmail', (req, res) => {
    const currentUrl = process.env.HOST_URL;
    const uniqueString = process.env.RES_STRING;
    const email = req.body.email;
    const newPassword = process.env.PASS_RESET;
    

    bcrypt.hash(newPassword,saltRounds, (err, hash) => { 
        if (err) {
            console.log(err)
        }
//update db with new password
        db.query(
            "UPDATE iwp_user SET user_password = ? WHERE user_email = ?", 
            [hash, email],
            // alert success
            (err, result) => {
                if (email.length == 0) {
                    res.send({message: "Please specify an email address."});
                } else if (regexp.test(email) == false) {
                    res.send({message: "You've entered an invalid email address."});
                };
                if (err) {
                    console.log(err);
                }
            } 
        );
    });

    const mailOptions = {
        from: process.env.AUTH_EMAIL,
        to : email,
        subject: "Reset Your Intelligent Water Password",
        html: '<p>Hello, you requested a password reset.</p><p> Your new password is: <b>xlKfmn</b></p><p>Click <a href="http://localhost:3000/login">here</a> to login</p>',
    };
    transporter
        .sendMail(mailOptions)
        .then(() => {
        // email sent
            res.json({
                status:"Pending",
                message: "Email sent!", 
            });
        });
});


//registration

app.get('/organizations', (req,res) => {
    db.query("SELECT organization_name FROM iwp_organization", (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

app.post('/register', (req, res) => {
    
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const username = req.body.username;
    const password = req.body.password;
    const regexp = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


    bcrypt.hash(password,saltRounds, (err, hash) => {
        
        if (err) {
            console.log(err)
        }
        // INSERT PRE-VALIDATION

        var arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

        function checker(value) {

            for (var i = 0; i < password.length; i++) {
                if (value.indexOf(password[i]) == -1) {
                    return true;
                } else {
                    return false;
                }
            }
            }

if (firstname.length !== 0 && lastname.length !== 0 && username.length !== 0 && password.length !== 0) {
    let messageString = "Account successfully created!";
    let valmessage = 'OK';
    console.log("message");
    if (password.length < 8) {
        valmessage = "The password is too short.";
    } else if (!/\d/.test(password)) {
        valmessage = "The password needs to contain a number.";
    } else if (regexp.test(username) === false) {
        console.log(regexp.test(username));
        console.log(username);
        console.log(regexp.test(username) === false);
        valmessage = "You've entered an invalid email address.";
    }
console.log(valmessage);
res.send({message: valmessage});

// Check to see if the user exists
if (valmessage === "OK") {
    let userExist = db.query("SELECT user_email FROM iwp_user WHERE user_email = ?", [username], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log(result)
    console.log(result.length);
        if (result.length === 0) {
            console.log("user does not already exist");
    // No other users - go ahead and attempt an Insert
            db.query(
            "INSERT INTO iwp_user (user_first_name, user_last_name, user_email, user_password, iwp_access_level, iwp_user_activated, iwp_user_photograph, iwp_user_preferred_communication_method) VALUES (?,?,?,?,5,0,'n/a','email')",
            [firstname, lastname, username, hash]
                );
        } else if(result.length > 0) {
        console.log("hit the else");
        messageString = "An account with that email already exists.";
        } else if(valmessage !== 'OK') {
        messageString = "You've entered an invalid password.";
            }
        res.send({message: messageString});
        }
    });
    
        }
    } else {
    res.send({message: "Please complete all fields"});
};    
    });
});
//get data from db for dashboard
app.get('/data', (req,res) => {
    db.query("SELECT * FROM iwp_sensor_data LEFT JOIN iwp_sensor_calculations ON iwp_sensor_data_id=iwp_sensor_data_id_fk ORDER BY date_sensed DESC LIMIT 10", (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

//is logged in?
app.get("/login", (req, res) => {
    if (req.session.user) {
        res.send({loggedIn: true, user: req.session.user})
    } else {
        res.send({loggedIn: false})
    }
})
//call map page
app.get('/MapPage', (req,res) => {
    console.log("Reading map")
    res.send("read map")
})

//call map page
app.get('/MapPage', (req,res) => {
    console.log("Reading map")
    res.send("read map")
})

//pump data
app.get('/pumps', (req,res) => {
    db.query("SELECT iwp_pump_id FROM iwp_pump ORDER BY iwp_pump_id", (err, result) => {
        if (err){
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

//get all records from sensor calculations. I wouldn't use this overmuch.
app.get('/calcs', (req, res) => {
    db.query("SELECT daily_volume_sum FROM iwp_sensor_calculations", (err, result) => {
        if(err){
            console.log(err);
        } else {
            res.send(result);
        }
    })
})

//get data for charts
app.get('/chartData', (req, res) => {
    db.query("SELECT * FROM(SELECT iwp_pump_id_fk, iwp_sensor_data_id, date_sensed, daily_volume_sum, battery_percentage, leak_coefficient_avg FROM iwp_sensor_data LEFT JOIN iwp_sensor_calculations ON iwp_sensor_data_id=iwp_sensor_data_id_fk WHERE iwp_pump_id_fk ='"+req.query.id+"' ORDER BY date_sensed DESC LIMIT 8) sub ORDER BY date_sensed ASC", (err, result) => {
        if (err){
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

//get data for map
app.get('/mapData', (req, res) => {
    db.query("SELECT iwp_pump_id, pump_name, gps_latitude, gps_longitude, country_fk from iwpDB.iwp_pump WHERE iwp_pump_id ='"+req.query.id+"' ORDER BY iwp_pump_id", (err, result) => {
        if (err){
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

//get all data for map
app.get('/mapDatas', (req, res) => {
    db.query("SELECT iwp_pump_id, pump_name, gps_latitude, gps_longitude, country_fk from iwpDB.iwp_pump", (err, result) => {
        if (err){
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

//Route for Danger and notifications
app.get('/dangerData', (req, res) => {
    db.query("SELECT t1.*, t2.*, t3.* FROM iwp_sensor_data t1 LEFT JOIN iwp_sensor_calculations t2 ON iwp_sensor_data_id=iwp_sensor_data_id_fk RIGHT JOIN iwp_pump t3 on iwp_pump_id_fk=iwp_pump_id WHERE t1.date_sensed = ( SELECT t4.date_sensed FROM iwp_sensor_data t4 LEFT JOIN iwp_sensor_calculations t5 ON iwp_sensor_data_id=iwp_sensor_data_id_fk WHERE t4.iwp_pump_id_fk = t1.iwp_pump_id_fk ORDER BY t4.iwp_pump_id_fk DESC LIMIT 1) ORDER BY t1.date_sensed DESC", (err, result) => {
        if (err){
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

//Route for Last Transmissions pie chart
app.get('/lastTrans', (req, res) => {
    db.query("SELECT iwp_pump_id_fk FROM iwp_sensor_data LEFT JOIN iwp_sensor_calculations ON iwp_sensor_data_id=iwp_sensor_data_id_fk ORDER BY timestamp DESC limit 25", (err, result) => {
        if(err){
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

//JWT info and config
const verifyJWT = (req, res, next) => {
    const token = req.headers["x-access-token"]

    if(!token){
        res.send("Send token next time")
    }
    else {
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                res.json({ auth: false, message: "failed to authenticate"});
            } else {
                req.userId = decoded.id;
                next();
            }
        });
    }
};

app.get('/isUserAuth', verifyJWT, (req, res) => {
    res.send("You are authenticated")
})

//Login
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
                       const id = result[0].iwp_user_id
                       const token = jwt.sign({id}, process.env.JWT_SECRET, {
                           expiresIn: 300,
                        });
                    
                    req.session.user = result;
                    console.log(req.session.user);
                    res.send({message: "Logged in as " + username});
                    res.send(result);
                    res.json({auth: true, token: token, result: result}) ;
                       
                   } else {
                        res.json({
                            auth: false,
                            message: "Wrong username/password combination",
                        });
                        res.send({message: "Wrong username/password combination." });
                   }
               }); 
            } else {
                res.json({ auth: false, message: "User does not exist"});
                res.send({ message: "User does not exist."});
            }
        }
    );
});

app.listen(3001, ()=> {
    console.log("Yay, your server is running on port 3001");
});
