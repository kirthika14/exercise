const EventEmitter = require('events');
const myEmitter = new EventEmitter();


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
 
myEmitter.emit("TEST_EVENT");

//streams are event emittters
//process.stdin, process.stdout  
//on means subscribing to  an event
//subscriptions work only if we put on before emit