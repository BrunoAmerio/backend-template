import Mongoose from 'mongoose'

const dbUri = process.env.MONGO_URL

const connectToDB = async () => {
  await Mongoose.connect(dbUri)

  console.log('DB CONNECTED')
}

export default connectToDB
