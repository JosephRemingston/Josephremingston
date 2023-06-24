//packages

var express = require("express");
var app = express();
require("dotenv").config();
var bodyParser = require("body-parser");
var formData = require('form-data');
var Mailgun = require('mailgun.js');

// constant values
var API_KEY = process.env.API_KEY;
var DOMAIN = process.env.DOMAIN;
var mailgun = new Mailgun(formData);
var client = mailgun.client({username: 'api', key: API_KEY});

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/"));

// main
app.get("/" , (req , res) => {
  res.sendFile(__dirname + "/");
})

app.post('/', async (req, res) => {
  var messageData = {
    from: req.body.email,
    to: `ljremi@gmail.com`,
    subject: 'From form',
    text: req.body.message
  };
  await client.messages.create(DOMAIN, messageData)
      .then((res) => {
        console.log("Mail sent");
      })
      .catch((err) => {
        console.error(err);
      });
});

app.listen(200 , () => {
  console.log("server");
})