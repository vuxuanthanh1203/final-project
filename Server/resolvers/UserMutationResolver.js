// @ts-check
'use strict'

const User = require('../models').User
const hashPassword = require('../utils/hashPassword')
const sendEmail = require('../utils/sendEmail')

const UserMutationResolver = {
  Mutation: {
    /**
      * @param {*} args - Create user input
      * @returns {Promise<import ('../models/User').UserEntity>}
      */
    async createUser (parent, args, context) {
      const data = args.input
      console.log(data)

      const existingUser = await User.findOne({ where: { email: data.email } })

      if (existingUser) {
        throw new Error('Email already exists')
      }

      const password = await hashPassword(data.password)

      const user = await User.create({
        ...data,
        password,
        createdAt: new Date(),
        updatedAt: new Date()
      })

      return user
    },

    /**
      * @param {{
      *   userId:number
      * }} args - Args of this resolver
      * @returns {Promise<DeleteUserResult>}
      */
    async deleteUser (parent, args, context) {
      await User.destroy({
        where: {
          id: args.userId
        }
      })

      return {
        success: true
      }
    },

    /**
      * @param {*} args - Update user input
      * @returns {Promise<import('../models/User').UserEntity>}
      */
    async updateUser (parent, args, context) {
      const data = args.input
      const password = await hashPassword(data.password)

      await User.update({ ...data, password }, {
        where: {
          id: args.userId
        }
      })
      return User.findByPk(args.userId)
    },

    /**
      * @param {*} args - Update user input
      * @returns {Promise<import('../models/User').UserEntity>}
      */
    async updateProfile (parent, args, context) {
      const data = args.input

      await User.update({ ...data }, {
        where: {
          id: args.userId
        }
      })
      return User.findByPk(args.userId)
    },

    /**
      * @param {*} args - Update user input
      * @returns {Promise<import('../models/User').UserEntity>}
      */
    async changePassword (parent, args, context) {
      const data = args.input
      const password = await hashPassword(data.password)

      await User.update({ password }, {
        where: {
          email: args.email
        }
      })

      const subject = 'Change Password Successfully'
      const text = 'Your password has been changed successfully !'
      sendEmail(args.email, subject, text)

      return User.findOne({ where: { email: args.email } })
    }
  }
}

module.exports = UserMutationResolver

/**
 * @typedef {{
 *  success: boolean
 * }} DeleteUserResult
 */
