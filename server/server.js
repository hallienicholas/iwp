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

const jwt = require('jsonwebtoken')

// email handling

const nodemailer = require("nodemailer");
const {v4: uuidv4} = require("uuid");
require("dotenv").config();
let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.AUTH_EMAIL,
        pass: process.env.AUTH_PASS,
    }
})
transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Ready for messages");
        console.log(success);
    }
});

//const port = process.env.PORT || 3000

app.use(express.json());
//app.use(express.urlencoded({ extended: true }))
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
            // 1000 * 60 * 24
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

// login pop-up

// app.use('/loginpop', (req, res) => {
//     res.send({
//       token: 'SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
//     });
//   });

// send verification email

const sendVerificationEmail = (username, res) => {
    // verification url
    const currentUrl = "http://localhost:3000";
    const uniqueString = 'SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

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

app.post('/sendPasswordResetEmail', (req, res) => {
    const currentUrl = "http://localhost:3000";
    const uniqueString = 'SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
    const email = req.body.email;
    const newPassword = "xlKfmn";

    bcrypt.hash(newPassword,saltRounds, (err, hash) => { 
        if (err) {
            console.log(err)
        }

        db.query(
            "UPDATE iwp_user SET user_password = ? WHERE user_email = ?", 
            [hash, email],
            // alert success
            (err, result) => {
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
                message: "Email sent",
            });
        });
});

// verify email
/* app.get("/verify/:userID/:uniqueString", (req,res) => {
    let{userId, uniqueString } = req.params;

    UserVerification
        .find({userId})
        .then((result) => {
            if (result.length > 0) {
                // user vrification record exists so we proceed

                const [expiresAt] = result[0];
                const hashedUniqueString = result[0].uniqueString;

                if (expiresAt < Date.now()) {
                    // record has expired so we delete it
                    UserVerification
                        .deleteOne({userId})
                        .then(result => {
                            User
                            .deleteOne({id: userId})
                            .then(() => {
                                //let message =
                                //res.redirect
                            })
                            .catch(error => {
                                //let message
                                //res.redirect
                            })
                        })
                        .catch((error) => {
                            console.log(error);
                            //let message = "An error occured while clearing expired verification record";
                            //res.redirect('/user/verified/error=true&message=${message}');
                        })
                } else {
                    // valid record exists so we validate the user
                    // First compare hashed unique string

                    bcrypt
                    .compare(uniqueString, hashedUniqueString)
                    .then(result => { 
                        if(result) {
                            // string match
                            // change in DB authorized to 1 (true)


                        } else {
                            // existing record but incorrect verification details
                            //let message
                            // res.redirect
                            // watch for errors
                        }
                    })
                    .catch(error =>  {
                        //let
                        //res.redirect
                    })

                }
            } else {
                // user verifiction record doesn't exist
                // >>send message, you have not verified your email
                // let message =
                //res.redirect('/user/verified/error=true&message=${message}');
            }
        })
        .catch((error) => {
            console.log(error);
            // let message =
            //res.redirect('/user/verified/error=true&message=${message}');
        })
}); */

// Verified page route (Skip?)


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
            // alert user success
            (err, result) => {
                console.log(err);
                if (err) {
                
                } else {
                    sendVerificationEmail(username, res);
                    //
                }
                    res.send({message: "An account with that email already exists." });
                } else if ((err) == null) { //change this to what it will actually be after registration is complete?
                    res.send({message: "Account successfully created."})
                };
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

app.get("/login", (req, res) => {
    if (req.session.user) {
        res.send({loggedIn: true, user: req.session.user})
    } else {
        res.send({loggedIn: false})
    }
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


const verifyJWT = (req, res, next) => {
    const token = req.headers["x-access-token"]

    if(!token){
        res.send("Send token next time")
    }
    else {
        jwt.verify(token, "jwtSecret", (err, decoded) => {
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
                       // vvv change secret & move to .env
                       const token = jwt.sign({id}, "jwtSecret", {
                           expiresIn: 300, 
                       });
                       req.session.user = result;
                       
                       res.json({auth: true, token: token, result: result}) ;
                    } else {
                        res.json({
                            auth: false,
                            message: "Wrong username/password combination",
                        });
                   }
               }); 
            } else {
                res.json({ auth: false, message: "User does not exist"});
                       console.log(req.session.user);
                       res.send({message: "Logged in as "});
                       res.send(result);
                       
                   } else {
                       res.send({message: "Wrong username/password combination." });
                   }
               }); 
            } else {
                res.send({ message: "User does not exist."});

            }
        }
    );
});

app.listen(3001, ()=> {
    console.log("Yay, your server is running on port 3001");
});

//API routes 

