// @ts-check
'use strict'

const User = require('../models').User

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const hashPassword = require('../utils/hashPassword')

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
      * @param {*} args - login input
      * @returns {Promise<AuthResponse>}
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

      if (result.isAdmin === false) {
        throw new Error('Authorization Error!')
      }

      const token = jwt.sign(
        { data: { userId: user.id, email: user.email } },
        process.env.SECRET_TOKEN,
        { expiresIn: '1h' }
      )

      return {
        user,
        token
      }
    }
  }
}

module.exports = UserMutationResolver

/**
 * @typedef {{
 *  token: string
 *  user: import('../models/User').UserEntity
 * }} AuthResponse
 */

/**
 * @typedef {{
 *  success: boolean
 * }} DeleteUserResult
 */
