interface Square {
    color: String,
    area: Number
}
interface SquareConfig {
    color?: string
    width?: number
}
function createSquare(config: SquareConfig): Square {
    let newSquare = { color: "white", area: 100 }
    if (config.color) {
        newSquare.color = config.color
    }
    if (config.width) {
        newSquare.area = config.width * config.width
    }
    return newSquare
}

let mySquare = createSquare({ colour: "black", width: 100 }) // 会被检查

let mySquare1 = createSquare({ colour: "black", width: 100 } as SquareConfig) // 强行as

let option = { colour: "black", width: 100 };
let mySquare2 = createSquare(option) // 跳过检查

interface Calculator {
    (x: number): Calculator;
    multiply: (x: number) => Calculator;
    add: (x: number) => number;
}

declare let calcu: Calculator;
calcu(2)
    .multiply(5)
    .add(1)
// 返回数字