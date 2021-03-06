var gulp = require('gulp');
var less = require('gulp-less');
// npm install --save-dev gulp-less

var connect = require('gulp-connect');
// npm install --save-dev gulp-connect

gulp.task('assets-html', () => {
  gulp.src('assets/html/index.html')
    .pipe(gulp.dest('www/'));
});

gulp.task('assets-less', () => {
  gulp.src('assets/less/estilo.less')
    .pipe(less({compress: true}))
    .pipe(gulp.dest('www/css'));
});


gulp.task('compile-src', () => {
  gulp.src('src/*')
    .pipe(gulp.dest('www/js/'));
});

gulp.task('watch', () => {
  gulp.watch('assets/html/*/.html', ['assets-html']);
  gulp.watch('assets/less/*/.less', ['assets-less']);
  gulp.watch('src/**/*.js', ['compile-src']);
});

gulp.task('server', () => {
  connect.server({
    root: 'www',
    index: 'index.html',
    liveReload: true,
    port: 8080
  });
});

gulp.task('default', ['assets-html', 'assets-less','compile-src']);
