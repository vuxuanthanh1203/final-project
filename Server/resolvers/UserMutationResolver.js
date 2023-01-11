// @ts-check
'use strict'

const User = require('../models').User

const bcrypt = require('bcrypt')
const generateToken = require('../utils/generateToken')
const hashPassword = require('../utils/hashPassword')

const UserMutationResolver = {
  Mutation: {
    /**
      * @param {*} args - Create user input
      * @param {import('../contexts/context')} context - User context
    * @returns {Promise<AuthResult>}
      */
    async createUser (parent, args, context) {
      const data = args.input

      const existingUser = await User.findOne({ where: { email: data.email } })

      if (existingUser) {
        throw new Error('Dupplicated user')
      }

      const password = await hashPassword(data.password)

      const user = await User.create({
        ...data,
        password,
        createdAt: new Date(),
        updatedAt: new Date()
      })

      return {
        user,
        token: generateToken(user.id)
      }
    },

    /**
      * @param {number} userId - UserId
      * @param {import('../contexts/context')} context - User context
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
      * @param {import('../contexts/context')} context - User context
      * @returns {Promise<import('../models/User').UserEntity>}
      */
    async updateUser (parent, args, context) {
      const data = args.input

      await User.update({ ...data }, {
        where: {
          id: args.userId
        }
      })
      return User.findByPk(args.userId)
    },

    /**
      * @param {*} args - login input
      * @param {import('../contexts/context')} context - User context
      * @returns {Promise<AuthResult>}
      */
    async login (parent, args, context) {
      const data = args.input

      const result = await User.findOne({ where: { email: data.email } })

      if (!result) {
        throw new Error('User not found')
      }

      const isPasswordValid = await bcrypt.compare(data.password, result.password)

      if (!isPasswordValid) {
        throw new Error('Passwords do not match !!!')
      }

      const user = {
        id: result.id,
        name: result.name,
        userName: result.userName,
        email: result.email,
        phoneNumber: result.phoneNumber,
        address: result.address,
        isAdmin: result.isAdmin
      }

      return {
        user,
        token: generateToken(user.id)
      }
    }
  }
}

module.exports = UserMutationResolver

/**
 * @typedef {{
 *  token: string
 *  User: <import('../models/User').UserEntity
 * }} AuthResult
 */

/**
 * @typedef {{
 *  success: boolean
 * }} DeleteUserResult
 */
