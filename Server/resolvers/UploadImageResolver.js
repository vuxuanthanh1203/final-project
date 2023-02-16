// @ts-check
'use strict'

const { join, parse } = require('path')
const { createWriteStream } = require('fs')

const UploadImageResolver = {
  Mutation: {
    async imageUploader (parent, { file }, context) {
      // Time: 15:44
      const { filename, createReadStream } = await file
      const stream = createReadStream()
      let { ext, name } = parse(filename)

      name = name.replace(/([^a-z0-9]+)/gi, '-').replace(' ', '_')
      const URL = `${process.env.BASE_URL}${process.env.PORT}`

      let serverFile = join(__dirname, `../upload/${name}${ext}`)
      const writeStream = await createWriteStream(serverFile)
      await stream.pipe(writeStream)
      serverFile = `${URL}${serverFile.split('upload')[1]}`

      return serverFile
    }
  }
}

module.exports = UploadImageResolver
