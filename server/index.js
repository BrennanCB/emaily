const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send({'hi': 'there'});
});

console.log('I FOUND PORT: ', process.env.port);
const PORT = process.env.port || 5000;
console.log('I FOUND PORT: ', PORT);

app.listen(PORT);
