// 泛型
function echo<T>(arg: T): T {
    return arg
}

const string: string = '234'
const result = echo(string)

function swap<T, D>(tuple: [T, D]): [D, T] {
    return [tuple[1], tuple[0]]
}
const arr = swap([12, 'fsfsdf'])

// 约束泛型，虽说是传参但是需要是有length 的传参，约束为包含length的参数
// 约束为数组T[]
interface IwithLength {
    length: number
}
function echoWithLength<T extends IwithLength>(arg: T): number {
    return arg.length
}

const obj = echoWithLength({ length: 23 })

// 类的泛型
class Quene<T>{
    private data:T[] = [];
    push(item: T) {
        return this.data.push(item)
    }
    pop(): T|undefined {
        return this.data.shift()
    }
}
const quene = new Quene<number>();
quene.push(1)
// quene.push('sfsa')
console.log(quene.pop().toFixed())