// const fs = require("fs")
// const { task } = require("folktale/concurrency/task")
// const { split, find } = require("lodash/fp")
// function readFile(filename) {
//     return task(resolver => {
//         fs.readFile(filename, "utf-8", (err, data) => {
//             if (err) {
//                 resolver.reject(err)
//             } else {
//                 resolver.resolve(data)
//             }
//         })
//     })
// }
// //task返回的是一个函子，无法直接读取，所以使用run读取内容，listen是监听resolve与reject的方法
// readFile("../package.json").map(split("\n")).map(find(x => x.includes("version"))).run().listen({
//     onRejected: err => {
//         console.log(err)
//     },
//     onResolved: data => {
//         console.log(data)
//     }
// })



// 看一个IO函子问题
const fs = require("fs")
const fp = require("lodash/fp")
const { split, find } = require("lodash/fp")
class IO {
    static of(value) {
        return new IO(() => value)
    }
    constructor(fn) {
        this._value = fn
    }
    map(fn) {
        return new IO(fp.flowRight(fn, this._value))
    }
}

let r = IO.of(process).map(p => p.execPath)
console.log(r)
console.log(r._value())

function readFile(filename) {
    return new IO(function () {
        fs.readFileSync(filename, "utf-8")
    })
}
function print(x) {
    return new IO(function () {
        console.log(x)
        return x
    })
}
let cat = fp.flowRight(print, readFile)
// IO(IO(x))结果是一个函子嵌套一个函子
console.log(cat("../package.json"))
//读取文件
console.log(cat("../package.json")._value())