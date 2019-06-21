const express = require('express');
const app = express();

// This is your home, nothing wrong here, be safe
app.get('/', (req, res) => res.send('Hello, NodeConf Colombia!'));

// Endpoint to block your application event loop, nice!
app.get('/block', (req, res) => {
  // This is 5 seconds, you can make longer :)
  const end = Date.now() + 5000;
  while (Date.now() < end) {
    const soMuchMathWOW = 1 + 2 + 3;
  }
  res.send('I am done!');
});

// A non blocking operation endpoint, we are still safe here
app.get('/noblock', (req, res) => {
  setTimeout(() => res.send('I am done!'), 5000);
});

app.listen(3000, () => console.log('Super duper app listening on port 3000'));
