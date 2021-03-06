const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

const { db } = require('./models')

app.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

const init = async() => {
  try {
    await db.sync()
    app.listen(3001, () =>
      console.log('Express server is running on localhost:3001')
    )

  } catch (error) {
    console.error('Error starting server:', error)
  }
}

init()
