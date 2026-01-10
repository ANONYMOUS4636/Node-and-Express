const { readFile, writeFile } = require("fs");
console.log('entering arena');

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);

    }
    console.log(result);
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);

        }
        console.log(result);
        const second = result;
        writeFile('./content/resut.txt', `here is the result ${first} , ${second}`, (err, result) => {
            if (err) {
                console.log(err);
                return;

            }
            console.log(result);
            console.log('done with the tas');
            

        })

    })

})

console.log('satrting new task');
