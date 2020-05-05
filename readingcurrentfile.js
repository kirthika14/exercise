const cs=require('fs');
const data=cs.readFileSync(__filename);//this to read the current file __filename shows current file in execution
console.log('data in file is:',data);
console.log('TEST');