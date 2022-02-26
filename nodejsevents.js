const EventEmitter = require('events');

class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();

myEmitter.on('WaterFall', () => {
    console.log('Please click the photo');
    setTimeout(() => {
        console.log('Please click the picture fast');
    }, 3000);
});
// myEmitter.emit('event');

console.log("The script is running")
myEmitter.emit('WaterFall');
console.log("The script is still running")
myEmitter.emit('WaterFall');