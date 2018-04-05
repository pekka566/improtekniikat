const express = require('express');
const app = express();
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = 3001;
app.listen(port, () => {
  console.log('listening on ' + port);
});

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/html', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.use(express.static(__dirname + '/public'));

app.post('/calculate', (req, res) => {
  const { name, amount } = req.body || {};
  res.send(`I've got a POST with request body: ${name}, ${amount}`);
});
