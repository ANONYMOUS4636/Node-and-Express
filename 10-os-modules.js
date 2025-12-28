const os=require("os");

//info abiut current user
const user=os.userInfo();
console.log(user);

//uptime methord returns the uptime of a system
console.log(`system up time is ${os.uptime()}`);

const currentUser={
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freemem:os.freemem(),
}

console.log(currentUser);
