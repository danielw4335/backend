export default {
  dbURL: process.env.MONGO_URL || 'mongodb+srv://theUser:thePass@cluster0-klgzh.mongodb.net/test?retryWrites=true&w=majority',
  dbName : process.env.DB_NAME || 'story_db'
}
