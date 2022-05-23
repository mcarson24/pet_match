const express = require('express')
const db = require('./config/connection')
const path = require('path')

const PORT = process.env.PORT || 3001
const app = express()

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serves up static assets 
// TODO: REMOVE? THIS MAY NOT BE NECESSARY
app.use('/images', express.static(path.join(__dirname, '../client/images')));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once('open', () => {
  app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`))
})