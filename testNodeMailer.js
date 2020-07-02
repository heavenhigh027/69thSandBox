var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'arnulfo58@ethereal.email',
    pass: 'pat3hR6WZUvFC6Rc15'
  }
});

var mailOptions = {
  from: 'obTb4ymi@gmail.com',
  to: 'blue_cool_icy_mint@hotmail.com',
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