const fs=require('fs');
const util=require('util');

const readFilePromice=util.promisify(fs.readFile)
const writeFilePromice=util.promisify(fs.writeFile)

const start = async () => {
    try {
        const first = await readFilePromice('./content/first.txt','utf8');
        const second = await readFilePromice('./content/second.txt','utf8');
        await writeFilePromice('./content/result-mind-grenade.txt',`THIS IS ${first} AND ${second}`);
        console.log(first,'\n');
        console.log(second,'\n');
    } catch (err) {
        console.log(err);

    }


}

start();
