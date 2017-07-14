var gulp = require('gulp');
var jshint = require('gulp-jshint');//�﷨���
var concat = require('gulp-concat');//�ϲ��ļ�
var uglify = require('gulp-uglify');//ѹ������
var rename = require('gulp-rename');//������
// �﷨���
gulp.task('jshint', function () {
    return gulp.src('js/*.js')
               .pipe(jshint())
               .pipe(jshint.reporter('default'));
});
// �ϲ���Ȼ��ѹ�������������
gulp.task('minify', function (){
    return gulp.src('js/*.js')
               .pipe(concat('all.js'))
               .pipe(gulp.dest('js/dist'))
               .pipe(uglify())
               .pipe(rename('all.min.js'))
               .pipe(gulp.dest('js/dist'));
});
// �����ļ��ı仯
gulp.task('watch', function () {
    gulp.watch('js/*.js', ['jshint', 'minify']);
});
// ע��ȱʡ����
gulp.task('default', ['jshint', 'minify', 'watch']);