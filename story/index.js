const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

app.use(bodyParser());

app.post('/api/story', (req, res) => {
  console.log('hitter');
  res.status(200).send(stories);
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
