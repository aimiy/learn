// gulpfile.js
var gulp = require('gulp');
var connect = require('gulp-connect');
var livereload = require('gulp-livereload');

var serverConfig = {
    root: "./",
    port: 2323,
    livereload: true,
    host: '::'
}
gulp.task('server',function(){
    connect.server(serverConfig);
});

gulp.task('watch', function () {
    livereload.listen();
    gulp.watch(['*/*.html','*/*/*.html'],function(event){
        livereload.changed(event.path);
    })
});

gulp.task('default',gulp.series('server','watch'));

// gulp.task('html', function(){
//     console.log('html改变，刷新');
//     gulp.src('*.html')
//     .pipe(connect.reload());
// });
// 
// gulp.task('min',['html','script','css','imagemin']);

// gulp.task('default', gulp.series('server', 'watch', function() {
//   // Do something after a, b, and c are finished.
// }));