module.exports = {
  port: process.env.PORT || 3000,
  mongo_uri: process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/instaclone',
  secret: process.env.SECRET || 'CodingIsCool'
}