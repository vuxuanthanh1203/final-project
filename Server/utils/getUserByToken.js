const jwt = require('jsonwebtoken')
const User = require('../models').User

async function getUserByToken (req) {
  let user = null
  try {
    if (req.headers.authorization && req.headers.authorization.includes('bearer')) {
      const token = req.headers.authorization.split(' ')[1]
      if (token) {
        const { data: { userId, email } } = jwt.verify(token, process.env.SECRET_TOKEN)
        user = await User.findByPk(userId)
      }
    }
  } catch (error) {
    console.log(error)
  }
  return user
}

module.exports = { getUserByToken }
