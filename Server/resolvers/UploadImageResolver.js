// @ts-check
'use strict'

const { join, parse } = require('path')
const { createWriteStream } = require('fs')

const UploadImageResolver = {
  Mutation: {
    async imageUploader (parent, { file }, context) {
      console.log(file)
      const myfile = await file
      const stream = myfile.createReadStream()
      let { ext, name } = parse(myfile.filename)

      name = name.replace(/([^a-z0-9]+)/gi, '-').replace(' ', '_')

      let serverFile = join(__dirname, `../upload/${name}_${Date.now()}${ext}`)

      const writeStream = await createWriteStream(serverFile)
      await stream.pipe(writeStream)

      const URL = `${process.env.BASE_URL}${process.env.PORT}`
      serverFile = `${URL}/${serverFile.split('upload\\')[1]}`
      // serverFile = `${URL}${serverFile.split('upload')[1]}`

      return serverFile
    }
  }
}

module.exports = UploadImageResolver
