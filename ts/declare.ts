function f() {
    var a = 10
    return function g() {
        var b = a + 1
        return b
    }
}

var g = f()
g()

function y(shouldInitiallize) {
    var x;
    if (shouldInitiallize) {
        x = 10
    }
    return x
}

y(false) // undefined
y(true) // 10

function sumMatrix(matrix) {
    var sum = 0
    for (var i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i]
        for (var i = 0; i < currentRow.length; i++) {
            sum += currentRow[i]
        }
    }
    return sum
}

var matrix = []