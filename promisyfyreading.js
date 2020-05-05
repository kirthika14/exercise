const fs=require('fs');
const util=require('util');

const readfile=util.promisify(fs.readFile);

async function main(){
    const data = await readfile(__filename);
    console.log('file  data  is ',data);
}
main();
console.log('TEST');
//this is the promise way of reading file