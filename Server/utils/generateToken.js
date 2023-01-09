const jwt = require('jsonwebtoken')

function generateToken (userId) {
  return jwt.sign({ userId }, process.env.SECRET_TOKEN, { expiresIn: '10h' })
}

module.exports = generateToken
