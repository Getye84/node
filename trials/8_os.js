const os = require('os');

const user = os.userInfo();

//info abt user
console.log(user)

///system uptime in seconds
console.log(`Systme uptime : ${os.uptime()} seconds`)

const currentOs = {
    name: os.type(),
    realease:os.release(),
    totalMem: os.totalmem(),
    freeMem : os.freemem()
}

console.log(currentOs)