const path =require('path');
const fs  = require('fs');
const files= ['.bash_history.txt','.dbshell.txt','dddd'];
files.forEach(file =>{
    try{
    const filepath=path.resolve(require('os').homedir(),file);
    const data=fs.readFileSync(filepath);
    console.log('file data is:',data);
    }
    catch(err){
        console.log('file not found')
    }
});