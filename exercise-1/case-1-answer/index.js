const duration = process.env.EVENT_LOOP_BLOCK_TIME;

// Our Event Loop Blocker function
const blockEvL = (d) => {
  console.log('START BLOCKING', Date.now());
  const endTime = Date.now() + (d * 1000);
  while (Date.now() < endTime) {
    Math.random();
    //console.log(Math.random());
  }
  console.log('STOP BLOCKING', Date.now());
};

// first declare a function that returns a promise that resolves to a value of
// 🍣 after 2 seconds.
function theSushiTable() {
  return new Promise(resolve => {
    resolve('🍣');
  });
}

async function asyncActions () {
  // We then declare an async function and await for the promise to resolve
  // before logging the message to the console:
  const inPlate = await theSushiTable();
  console.log('Message:', inPlate);
}

// Request handlers
asyncActions();
blockEvL(duration);
