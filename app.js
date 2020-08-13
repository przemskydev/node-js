
const path = require('path');
const pathObj = path.parse(__filename);


const os = require('os');
const totalMem = os.totalmem()
const freeMem = os.freemem()

const fs = require('fs');
const files = fs.readdir('./', (err, files)=>{
  // if(err) console.log(err);
  // else console.log('Files', files)
})

const EventEmitter = require('events');

const Logger = require('./utils');
const logger = new Logger()

logger.addListener('messageLogged', (arg)=>console.log('Listener called', arg))


logger.logg('Beniz')
