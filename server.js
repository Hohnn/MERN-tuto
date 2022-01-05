import express from 'express'
import mongoose from 'mongoose'
import routes from './routes/routes.js'
import dotenv from 'dotenv'
import './auth/auth.js'
dotenv.config()

const PORT = process.env.PORT || 5000

const app = express()

app.use(express.json())

app.use(express.static('client/build'))
mongoose.connect(process.env.MONGODB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCeatIndex: true
})

app.use(routes)

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
})
