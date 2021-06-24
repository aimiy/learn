const _ = require("lodash")
console.log(_.map(["23", "8", "10"], parseInt)) // [ 23, NaN, 2 ]
// 因为map收集了多的参数
// parseInt("23", 0, array)
// parseInt("8", 1, array)
// parseInt("10", 2, array)
//但是对于parseint来说，这些key代表了进制，所以结果不对

// fp中的map方法只接受了一个参数
const fp = require("lodash/fp")
console.log(fp.map(parseInt, ["23", "8", "10"]))
