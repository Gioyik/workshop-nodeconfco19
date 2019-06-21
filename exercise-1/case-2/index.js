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

// Put here a non blocking JS operation
app.get('/noblock', (req, res) => {

});

app.listen(3000, () => console.log('Super duper app listening on port 3000'));

// Try running the following scenarios:
//
// 0. Check your app is running correctly:
//  curl http://localhost:3000/
// 1. Try the noblock endpoint and use `ab` to test your home endpoint:
//  curl http://localhost:3000/noblock
//  ab -n 10 http://localhost:3000/
// 2. Try the block endpoint and use `ab` to test your home endpoint:
//  curl http://localhost:3000/block
//  ab -n 10 http://localhost:3000/
