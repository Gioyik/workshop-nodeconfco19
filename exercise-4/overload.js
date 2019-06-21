var siege = require('siege')

siege()
  .on(3000)
  .for(10000).times
  .get('/')
  .attack()
