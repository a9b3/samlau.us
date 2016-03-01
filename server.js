'use strict';

const port = 9000;
const path = require('path');
const express = require('express');
const cors = require('cors');
const emailSettings = require('./secrets.js');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const transporter = nodemailer.createTransport(require('./secrets.js').emailSettings);

function sendMail(mailOptions) {
  mailOptions.from = 'Do not reply';
  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (e, info) => {
      if (e) return reject(e);
      resolve(info);
    });
  });
}

function startServer() {
  const app = express();
  const server = require('http').createServer(app);

  app.use(cors());
  app.use(bodyParser.urlencoded({extended:true}));
  app.use(bodyParser.json());

  app.post('/api/send_mail', function(req, res) {
    const body = req.body;
    const mailOptions = {
      to: 'esayemm@gmail.com',
      subject: `${body.email}:${body.subject}:samlau.us`,
      text: body.message,
    };

    sendMail(mailOptions)
    .then(info => {
      res.send(info);
    })
    .catch(e => {
      res.status(500).send(e);
    });
  });

  app.use(express.static('./dist/'));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });

  server.listen(port, function(e) {
    if (e) return;
    console.log(`listening on port ${port}`);
  });
}

startServer();
