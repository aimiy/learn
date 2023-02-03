const { watch, series } = require('gulp');
var connect = require('gulp-connect');
var livereload = require('gulp-livereload');
var serverConfig = {
    root: "./",
    port: 2323,
    livereload: true,
    host: '::'
}
function server() {
    connect.server(serverConfig);
}

function watchTask() {
    livereload.listen();
    watch('test.html', function (cb) {
        console.log("重载", connect, livereload)
        connect.reload()
        livereload.reload()
        cb()
    });
}

function defaultTask(cb) {
    server()
    watchTask()
    cb();
}

// 可以只关联一个任务
exports.default = defaultTask