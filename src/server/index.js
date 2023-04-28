const express = require("express");
const nodemailer = require("nodemailer");
var bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

var urlencodedParser = bodyParser.urlencoded({ extended: true });
const app = express();
const port = 5001;
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com", //replace with your email provider
  port: 587,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

app.get("/", (req, res) => {
  console.log("Success");
});

app.post("/send", (req, res, next) => {
  var name = req.body.name;
  var email = req.body.email;
  var subject = req.body.subject;
  var message = req.body.message;

  var mail = {
    from: name,
    to: "clab.pki@gmail.com", // receiver email,
    subject: subject,
    text: "From: " + email + "\n" + message,
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: "fail",
      });
    } else {
      res.json({
        status: "success",
      });
    }
  });
});

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});
