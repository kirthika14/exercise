const EventEmitter = require('events');
const myEmitter = new EventEmitter();

setImmediate(()=>{
    myEmitter.emit("TEST_EVENT");
});
//setimmediate has exception where event emit can before giving subscribe command

//different files can have different implemenntation for events
myEmitter.on("TEST_EVENT", ()=>{
    console.log("TEST_EVENT was fired");
});
myEmitter.on("TEST_EVENT", ()=>{
    console.log("TEST_EVENT was fired");
    
});
myEmitter.on("TEST_EVENT",()=>{
    console.log("TEST_EVENT was fired");
});
 
