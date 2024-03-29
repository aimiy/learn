// 01—35共三十五个号码中随机摇出五个前区号码，从01—12共十二个号码中随机摇出两个后区号码
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
type box = Array<number>
type ball = number

function initBox(maxNumber: number): box {
    let box: box = [];
    for (let i = 1; i <= maxNumber; i++) {
        box.push(i)
    }
    return JSON.parse(JSON.stringify(box));
}

function getBall(box: box, luckyNumber: number): ball {
    let length = box.length;
    console.log("幸运数字为：" + luckyNumber)
    let index = Math.round(Math.random() * length * luckyNumber / luckyNumber);

    let ball = box[index];
    box.splice(index, 1)
    return ball
}

async function shakeBox(times: number, box: box, luckyNumber: number): Promise<box> {
    console.log("开始！")
    let temp: box = []
    for (let i = 1; i <= times; i++) {
        await delay(1000)
        let ball = getBall(box, luckyNumber)
        console.log(`第${i}个球！${ball}`)
        temp.push(ball)
    }
    return temp
}
interface boxResult {
    red: box
    blue: box
}

const init = async () => {
    let result: Array<object> = []
    let obj: boxResult = { red: [], blue: [] }
    let redBox = initBox(35)
    obj.red = await shakeBox(5, redBox, 21)
    obj.red = obj.red.sort((a, b) => a - b)
    console.log("红球箱", redBox)
    let blueBox = initBox(12)
    obj.blue = await shakeBox(2, blueBox, 9)
    obj.blue = obj.blue.sort((a, b) => a - b)
    console.log("蓝球箱", blueBox)
    result.push(obj)
    console.log(`本次结果为${JSON.stringify(obj)}`)
}
init()



