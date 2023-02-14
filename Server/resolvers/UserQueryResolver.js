// @ts-check
'use strict'

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

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
      * @returns {Promise<Array<import('../models/User').UserEntity>>}
      */
    async staff (parent, args, context) {
      const users = await User.findAll({
        where: {
          isAdmin: true
        }
      })
      return users
    },

    /**
      * @param {{
      *   userId:number
      * }} args - Args of this resolver
      * @returns {Promise<import('../models/User').UserEntity>}
      */
    async user (parent, args, context) {
      const user = await User.findByPk(args.userId)
      return user
    },

    /**
      * @param {{
      *   userId:number
      * }} args - Args of this resolver
      * @returns {Promise<import('../models/User').UserEntity>}
      */
    async me (parent, args, context) {
      return context.auth_user
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

module.exports = UserQueryResolver

/**
 * @typedef {{
 *  token: string
 *  user: import('../models/User').UserEntity
 * }} AuthResponse
 */
