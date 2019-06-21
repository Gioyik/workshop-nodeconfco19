const duration = process.env.EVENT_LOOP_BLOCK_TIME;

// Our Event Loop Blocker function
const blockEvL = (d) => {
  console.log('START BLOCKING', Date.now());
  const endTime = Date.now() + (d * 1000);
  while (Date.now() < endTime) {
    Math.random();
  }
  console.log('STOP BLOCKING', Date.now());
};

async function asyncActions () {
  // Put async code calls here:


}

// Request handlers
asyncActions();
blockEvL(duration);
