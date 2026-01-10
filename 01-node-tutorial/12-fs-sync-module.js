const {readFileSync,writeFileSync}=require("fs");
// const fs=require("fs")
console.log('start');

const first=readFileSync("./content/first.txt","utf8");
const second=readFileSync("./content/second.txt","utf8");
console.log(first);
console.log(second);
writeFileSync("./content/result.txt",`this is the result of: 1) ${first} and 2) ${second}`);
//if no file is there it will create one otherwise it will overwrite all content with new one

writeFileSync("./content/result.txt",`this is the result of: 1) ${first} and 2) ${second}`,{flag:'a'});
console.log('done with the task');
console.log('starting the next one');


//it will append the text not ovwer write it 