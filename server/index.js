import express from 'express'
import db from './config/connection.js'

const PORT = process.env.PORT || 3001
const app = express()

app.get('/', (req, res) => res.send('Hello, World!'))

db.once('open', () => {
  app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`))
})