const apiKey = process.env.MAILGUN_API_KEY
const domain = process.env.MAILGUN_DOMAIN
// @ts-ignore
const mailgun = require('mailgun-js')({ apiKey, domain })

const sendEmail = (email, subject, text) => {
  const mailData = {
    from: 'admin@gmail.com',
    to: email,
    subject,
    text
  }

  mailgun.messages().send(mailData, function (_error, body) {
    console.log(body)
  })
}

module.exports = sendEmail
