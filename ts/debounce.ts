// 题目：
// 实现一个函数 debounce(fn, wait)，该函数接受两个参数：fn 是需要防抖的函数，wait 是防抖时间间隔。返回一个新的函数，当调用新函数时，新函数会在 wait 时间间隔后调用 fn 函数。如果在 wait 时间间隔内再次调用新函数，则会重新计算时间间隔。
// 要求：
// 使用原生的 JavaScript 实现 debounce 函数。
// 提供一个示例，展示如何使用 debounce 函数来防抖一个事件。
// 注意：此题旨在考察面试者对于防抖函数的理解和实现能力。
const mydebounce = (fn: Function, wait: number): Function => {
    let timer: any;
    return function (this: unknown, ...args: any[]) {
        if (timer) {
            clearTimeout(timer)
        }
        timer = 0;
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, wait)
    }

}

function test(t: any) {
    console.log("本该打印的", t)
}

let newTest = mydebounce(test, 2000)
let a: {newTest:Function} = {
    newTest: newTest
};
newTest("sdfsdfad")
setTimeout(() => {
    console.log("3s到了")
}, 3000)
setTimeout(() => {
    newTest()
}, 1000)
setTimeout(() => {
    newTest()
}, 2000)
setTimeout(() => {
    newTest()
}, 3000)
setTimeout(() => {
    a.newTest(66666)
}, 4000)