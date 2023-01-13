// @ts-check
'use strict'

const User = require('../models').User

const UserQueryResolver = {
  Query: {
    /**
      * @returns {Array<import('../models/User').UserEntity>}
      */
    async users (parent, args, context) {
      const users = await User.findAll()
      return users
    },

    /**
      * @param {number} userId - user id
      * @returns {Promise<import('../models/User').UserEntity>}
      */
    async user (parent, args, context) {
      const user = await User.findByPk(args.userId)
      return user
    }
  }
}

module.exports = UserQueryResolver
