//either we can use this 

const fs=require('fs').promises



const start = async () => {
    try {
        const first = await fs.readFile('./content/first.txt','utf8');
        const second = await fs.readFile('./content/second.txt','utf8');
        await fs.writeFile('./content/result-mind-grenade.txt',`THIS IS ${first} AND ${second}`,{flag:'a'});
        console.log(first,'\n');
        console.log(second,'\n');
    } catch (err) {
        console.log(err);

    }


}

start();



//OR THIS

// const {readFile,writeFile}=require('fs').promises



// const start = async () => {
//     try {
//         const first = await readFile('./content/first.txt','utf8');
//         const second = await readFile('./content/second.txt','utf8');
//         await writeFile('./content/result-mind-grenade.txt',`THIS IS ${first} AND ${second}`,{flag:'a'});
//         console.log(first,'\n');
//         console.log(second,'\n');
//     } catch (err) {
//         console.log(err);

//     }


// }

// start();