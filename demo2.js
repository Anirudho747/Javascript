const os=require("os")
const assert=require("assert")

console.log(os.platform());
console.log(os.hostname());
console.log(os.version());
console.log(os.type());

assert(500>600,"assertion pass");