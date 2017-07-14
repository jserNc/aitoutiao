var gulp = require('gulp');
var jshint = require('gulp-jshint'); //语法检查
var concat = require('gulp-concat'); //合并文件
var uglify = require('gulp-uglify'); //压缩 js 代码
var rename = require('gulp-rename'); //重命名
var less = require('gulp-less');     //编译 less
var cssmin = require('gulp-minify-css'); // 压缩 css


// 语法检查
gulp.task('jshint', function () {
    return gulp.src('js/*.js')
               .pipe(jshint())
               .pipe(jshint.reporter('default'));
});

// 编译 less 文件
gulp.task('less',function(){
    gulp.src('less/**.less')
        .pipe(less())
        .pipe(cssmin())
        .pipe(gulp.dest('dist/css'))
});

// 合并 js，然后压缩，最后重命名
gulp.task('minify', function (){
    return gulp.src('js/*.js')
               .pipe(uglify())
               .pipe(gulp.dest('dist/js'));
});

// 监视文件的变化
gulp.task('watch', function () {
    gulp.watch('js/*.js', ['jshint', 'minify']);
    gulp.watch('less/**.less', ['less']);
});

// 注册缺省任务
gulp.task('default', ['jshint', 'minify', 'less', 'watch']);