// require("./trials/11_http.js")

const _= require('lodash');

const items = [1, [2, [3,4]]]
const newItems = _.flattenDeep(items);
console.log("first", items);
console.log("after", newItems);