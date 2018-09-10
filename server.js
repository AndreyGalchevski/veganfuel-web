const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');

const app = express();
const port = process.env.PORT || 3000;

app.use(serveStatic(__dirname + '/dist'));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/index.html'), err => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(port, () => console.log(`Server running on port ${port}`));
