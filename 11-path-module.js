const path=require("path");
//file directory seperator
console.log(path.sep);

const filepath=path.join('/content//','/subfolder','file.txt');
console.log(filepath);

const base=path.basename(filepath);
console.log(base);

const absolute=path.resolve(__dirname,'content','sub content','file.txt');
console.log(absolute);
