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
    watchTask()
}

function watchTask() {
    livereload.listen();
    watch(['*/*/*.html'],{ delay: 500 }, function (cb) {
        console.log("重载", livereload)
        livereload.reload()
        // connect.reload()
        cb()
    });
    watch(['*/*.html'],{ delay: 500 }, function (cb) {
        console.log("重载", livereload)
        livereload.reload()
        // connect.reload()
        cb()
    });
    // watch('*/*/*.css', function (cb) {
    //     console.log("重载js", livereload)
    //     livereload.changed('*/*/*.html')
    //     // connect.reload()
    //     cb()
    // });
}

function defaultTask(cb) {
    server()
    cb();
}

// 可以只关联一个任务
exports.default = defaultTask