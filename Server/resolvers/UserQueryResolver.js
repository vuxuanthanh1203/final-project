const UserQueryResolver = {
  Query: {
    /**
      * @param {import('../contexts/context')} context - User context
      * @returns {Array<import('../models/User').UserEntity>}
      */
    async users (parent, args, { context }) {
      const users = await context.Users.findAll()
      return users
    },

    /**
      * @param {number} id - user id
      * @param {import('../contexts/context')} context - User context
      * @returns {Promise<import('../models/User').UserEntity>}
      */
    async user (parent, args, { context }) {
      const user = await context.User.findByPk(args.id)
      return user
    }
  }
}

module.exports = UserQueryResolver
