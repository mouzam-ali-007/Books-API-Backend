const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail", // or use your SMTP
  auth: {
    user: 'mouzamsaleem007@gmail.com',
    pass: 'usdtcdclgiiitgaq',
  },

  
});

async function sendEmail(to, subject, html) {
  return await transporter.sendMail({
    from: `"Arslan Abbas" <${'mouzam.ali@dubizzlelabs.com'}>`,
    to,
    cc: 'mouzamsaleem007@gmail.com',
    subject,
    html,
  });
}

module.exports = sendEmail;
