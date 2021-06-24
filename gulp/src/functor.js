// class Container {
//     constructor(value) {
//         this._value = value
//     }
//     map(fn) {
//         return new Container(fn(this._value))
//     }
// }
// let r = new Container(5).map(x => x + 1).map(x => x * x);
// class Container {
//     static of(value) {
//         return new Container(value)
//     } // 静态方法
//     constructor(value) {
//         this._value = value
//     }
//     map(fn) {
//         return Container.of(fn(this._value))
//     }
// }
// let r = Container.of(5).map(x => x + 1).map(x => x * x);

// console.log(r)

// class Container {
//     static of(value) {
//         return new Container(value)
//     } // 静态方法
//     constructor(value) {
//         this._value = value
//     }
//     map(fn) {
//         return Container.of(fn(this._value))
//     }
// }
// let r = Container.of(5).map(x => x + 1).map(x => x * x);

// console.log(r)

// class MayBe {
//     static of(value) {
//         return new MayBe(value)
//     } // 静态方法
//     constructor(value) {
//         this._value = value
//     }
//     map(fn) {
//         return this.isNothing() ? MayBe.of(null) : MayBe.of(fn(this._value))
//     }
//     isNothing() {
//         return this._value === null || this._value === undefined
//     }
// }
// let r = MayBe.of("helloworld").map(x => x.toUpperCase());
// let r = MayBe.of(undefined).map(x => x.toUpperCase());
// console.log(r)


// class left {
//     static of(value) {
//         return new left(value)
//     } // 静态方法
//     constructor(value) {
//         this._value = value
//     }
//     map(fn) {
//         return this // 直接返回，用来处理错误消息
//     }
// }
// class right {
//     static of(value) {
//         return new right(value)
//     } // 静态方法
//     constructor(value) {
//         this._value = value
//     }
//     map(fn) {
//         return right.of(fn(this._value))
//     }
// }

// function parseJSON(str) {
//     try {
//         return right.of(JSON.parse(str))
//     } catch (err) {
//         return left.of({ error: err.message })
//     }
// }

// let r = parseJSON(`{"name":"wqrwe"}`).map(x => x.name.toUpperCase())
// console.log(r)


const fp = require("lodash/fp")
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