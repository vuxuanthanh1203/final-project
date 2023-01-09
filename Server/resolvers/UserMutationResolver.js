const bcrypt = require('bcrypt')
const generateToken = require('../utils/generateToken')
const hashPassword = require('../utils/hashPassword')

const UserMutationResolver = {
  Mutation: {
    /**
      * @param {*} args - Create user input
      * @param {import('../contexts/context')} context - User context
      * @returns {Promise<CreateUserResult>}
      */
    async createUser (parent, args, { context }) {
      const data = args.input

      const existingUser = await context.User.findOne({ where: { email: data.email } })

      if (existingUser) {
        throw new Error('Dupplicated user')
      }

      const password = await hashPassword(data.password)

      const user = await context.User.create({
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
    async deleteUser (parent, args, { context }) {
      return await context.User.destroy({
        where: {
          id: args.userId
        }
      })
    },

    /**
      * @param {*} args - Update user input
      * @param {import('../contexts/context')} context - User context
      * @returns {Promise<import('../models/User').UserEntity>}
      */
    async updateUser (parent, args, { context }) {
      const data = args.input

      await context.User.update({ ...data }, {
        where: {
          id: args.userId
        }
      })
      return context.User.findByPk(args.userId)
    },

    /**
      * @param {*} args - login input
      * @param {import('../contexts/context')} context - User context
      * @returns {Promise<CreateUserResult>}
      */
    async login (parent, args, { context }) {
      const data = args.input

      const user = await context.User.findOne({ where: { email: data.email } })

      if (!user) {
        throw new Error('User not found')
      }

      const isPasswordValid = await bcrypt.compare(data.password, user.password)

      if (!isPasswordValid) {
        throw new Error('Passwords do not match !!!')
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
 * }} CreateUserResult
 */

/**
 * @typedef {{
 *  success: boolean
 * }} DeleteUserResult
 */
