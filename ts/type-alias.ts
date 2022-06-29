// 类型别名
function sum(x: number, y: number): number {
    return x + y
}
let sum1: (x: number, y: number) => number
sum1 = (x, y) => x + y

type sumType = (x: number, y: number) => number
let sum2: sumType

type strOrNumber = number | string
let s: strOrNumber
// 字面量
const str: 'name' = 'name'
const number: 1 = 1
type Direction = 'Up' | 'Down' | 'Left' | 'Right'
let toWhere: Direction = 'Down'
// 交叉类型
interface Iname {
    name: string
}
type IPerson = Iname & { age: number }
let person: IPerson = { name: "fu", age: 11 }

