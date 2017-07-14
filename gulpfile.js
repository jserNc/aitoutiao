var gulp = require('gulp');
var jshint = require('gulp-jshint'); //�﷨���
var concat = require('gulp-concat'); //�ϲ��ļ�
var uglify = require('gulp-uglify'); //ѹ�� js ����
var rename = require('gulp-rename'); //������
var less = require('gulp-less');     //���� less
var cssmin = require('gulp-minify-css'); // ѹ�� css


// �﷨���
gulp.task('jshint', function () {
    return gulp.src('js/*.js')
               .pipe(jshint())
               .pipe(jshint.reporter('default'));
});

// ���� less �ļ�
gulp.task('less',function(){
    gulp.src('less/**.less')
        .pipe(less())
        .pipe(cssmin())
        .pipe(gulp.dest('dist/css'))
});

// �ϲ� js��Ȼ��ѹ�������������
gulp.task('minify', function (){
    return gulp.src('js/*.js')
               .pipe(uglify())
               .pipe(gulp.dest('dist/js'));
});

// �����ļ��ı仯
gulp.task('watch', function () {
    gulp.watch('js/*.js', ['jshint', 'minify']);
    gulp.watch('less/**.less', ['less']);
});

// ע��ȱʡ����
gulp.task('default', ['jshint', 'minify', 'less', 'watch']);