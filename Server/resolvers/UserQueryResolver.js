// @ts-check
'use strict'

const User = require('../models').User

const UserQueryResolver = {
  Query: {
    /**
      * @returns {Promise<Array<import('../models/User').UserEntity>>}
      */
    async users (parent, args, context) {
      const users = await User.findAll()
      return users
    },

    /**
      * @param {{
      *   userId:number
      * }} args - Args of this resolver
      * @returns {Promise<import('../models/User').UserEntity>}
      */
    async user (parent, args, context) {
      return context.auth_user
    }
  }
}

module.exports = UserQueryResolver
