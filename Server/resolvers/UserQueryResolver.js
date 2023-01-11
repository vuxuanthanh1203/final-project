// @ts-check
'use strict'

const User = require('../models').User

const UserQueryResolver = {
  Query: {
    /**
      * @param {import('../contexts/context')} context - User context
      * @returns {Array<import('../models/User').UserEntity>}
      */
    async users (parent, args, context) {
      const users = await User.findAll()
      return users
    },

    /**
      * @param {number} userId - user id
      * @param {import('../contexts/context')} context - User context
      * @returns {Promise<import('../models/User').UserEntity>}
      */
    async user (parent, args, context) {
      const user = await User.findByPk(args.userId)
      return user
    }
  }
}

module.exports = UserQueryResolver
