//commonJs, every  file is module(by default)
//Module - Ecapulated code

const fname = "Getye"
const lname = "Tetem"
const real_name = "Bewnet temesge"

module.exports = {fname, lname, just}

const sayHi = (name) => {
    console.log(`hellow to you ${name}`);
}

const just = ()=>{
    sayHi(real_name);
}

sayHi("node amn")
sayHi(fname)
sayHi(lname)