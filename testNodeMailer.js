var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'heavenhigh027@gmail.com',
    pass: 'Concentrate2.2'
  }
});

var mailOptions = {
  from: 'heavenhigh027@gmail.com',
  to: 'obTb4ymi@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});