// 基础类型

// 布尔值
let isDone:boolean = false
// 数字
let decLiteral:number = 20
let hexLiteral:number = 0x14
let binaryLiteral:number = 0b10100
let octalLiteral:number = 0o24

// 字符串
let name1:string = 'bob'
name1 = "smith"
// 也支持模板字符串
let sentence = `hello,my name is ${name1}.

thank you .`;
console.log(sentence);

// 数组
let list:number[]=[1,2,3]; // 数字的数组
let list2:Array<number> = [1,2,3];

// 元组
let x:[string,number]
x = ['hello',20]
x[1] = 1

console.log(x[0])



// 枚举类型
enum Color{
    Red = 1,
    Green = 3,
    Blue = 5
}
let c:Color = Color.Green
let colorName:string = Color[5]

console.log(colorName)


// any类型,不清楚什么类型,动态类型,不做语法检查
let notSure:any = 4
notSure = 'maybe a string'
notSure = false

let list3:any[] = [1,true,'free']
list3[1] = 'tt'

// void数据类型,表示没有类型

function earnUser():void{ // 没有任何返回值的函数就是void
    console.log(1231)
}

let unusable:void = undefined
let unusable1:void = null

// null,undefined类型
let u:undefined = undefined
let n:null = undefined // 子类型可以赋值给父类型


// never 永远不存在的类型,是任何类型的子类型

function error(msg:string):never{
    throw new Error(msg)
}
function fail(){
    return error('something failed')
}

function inifiniteLoop():never{
    while(true){
        
    }
}

// object非原始类型
// object.create

// declare function create1(o: object | null): void;

function create(o: object | null): void{
    console.log(o)
}
create({ prop: 0 }); // OK
create(null); // OK

// 以下错误
// create(o:42)
// create(o:'string')
// create(o:false)
// create(o:undefined)

// 类型断言
let someValue:any = 'this is a string'

// 为any的时候找不到someValue.length
// 强制转成字符串
// let strLength:number = (<string>sonmeValue).length
let strLength:number = (someValue as string).length
