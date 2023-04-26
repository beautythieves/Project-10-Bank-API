const mongoose = require('mongoose')

const databaseUrl ="mongodb+srv://simon:saucisse51@cluster0.4sx4e.mongodb.net/?retryWrites=true&w=majority"

module.exports = async () => {
  try {
    await mongoose.connect(databaseUrl, { useNewUrlParser: true })
    console.log('Database successfully connected')
  } catch (error) {
    console.error(`Database Connectivity Error: ${error}`)
    throw new Error(error)
  }
}
