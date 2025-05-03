const express = require('express');
const app = express();

app.use((req, res, next) => {
  const host = req.headers.host;

  if (host === 'app.nulldog.xyz:3000') {
    return next(); // Let Express handle it
  } else {
    return res.status(404).send('Not Found');
  }
});

// Now define routes normally
app.get('/', (req, res) => {
  res.send('Welcome to app.nulldog.xyz');
});

app.listen(3000, () => {
  console.log('Express app listening on port 3000');
});
