const cs=require('fs');

cs.readFile(__filename,  function cb1(err,data){   //first the filename and then the callback
 cs.writeFile(__filename + '.copy',data,function cb2(err) { //copy the  same the data in the file to another  same  file  with extension copy
     //nesting of more callback and in here we can have what ever we want
 });

});
console.log('TEST');