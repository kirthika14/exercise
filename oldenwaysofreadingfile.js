//callback fashion
const cs=require('fs');

cs.readFile(__filename,function cb(err,data){
    console.log('file data is:',data);
});
console.log('TEST');