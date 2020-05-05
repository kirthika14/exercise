const { readFile }= require('fs').promises;
async function main(){
    const data = await readFile(__filename);
    console.log('file data is',data);

}

main();
console.log('TEST');
//here in this promise we are extracting function readFile from module fs not  all the function