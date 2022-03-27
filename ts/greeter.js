// 基础类型
// 布尔值
var isDone = false;
// 数字
var decLiteral = 20;
var hexLiteral = 0x14;
var binaryLiteral = 20;
var octalLiteral = 20;
// 字符串
var name1 = 'bob';
name1 = "smith";
// 也支持模板字符串
var sentence = "hello,my name is " + name1 + ".\n\nthank you .";
console.log(sentence);
// 数组
var list = [1, 2, 3]; // 数字的数组
var list2 = [1, 2, 3];
// 元组
var x;
x = ['hello', 20];
x[1] = 1;
console.log(x[0]);
// 枚举类型
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 3] = "Green";
    Color[Color["Blue"] = 5] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
var colorName = Color[5];
console.log(colorName);
// any类型,不清楚什么类型,动态类型,不做语法检查
var notSure = 4;
notSure = 'maybe a string';
notSure = false;
var list3 = [1, true, 'free'];
list3[1] = 'tt';
// void数据类型,表示没有类型
function earnUser() {
    console.log(1231);
}
var unusable = undefined;
var unusable1 = null;
// null,undefined类型
var u = undefined;
var n = undefined; // 子类型可以赋值给父类型
// never 永远不存在的类型,是任何类型的子类型
function error(msg) {
    throw new Error(msg);
}
function fail() {
    return error('something failed');
}
function inifiniteLoop() {
    while (true) {
    }
}
// object非原始类型
// object.create
// declare function create1(o: object | null): void;
function create(o) {
    console.log(o);
}
create({ prop: 0 }); // OK
create(null); // OK
// 以下错误
// create(o:42)
// create(o:'string')
// create(o:false)
// create(o:undefined)
// 类型断言
var someValue = 'this is a string';
// 为any的时候找不到someValue.length
// 强制转成字符串
// let strLength:number = (<string>sonmeValue).length
var strLength = someValue.length;
