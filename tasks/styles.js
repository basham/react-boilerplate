var gulp = require('gulp');
var less = require('gulp-less');
var prefix = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var gzip = require('gulp-gzip');
var browserSync = require('browser-sync');

gulp.task('styles', function() {
  return gulp.src([
      './bower_components/normalize.css/normalize.css',
      './src/styles/main.less'
    ])
    .pipe(less({
      compress: true
    }))
    .on('error', console.error)
    .pipe(prefix())
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('./build'))
    .pipe(browserSync.reload({
      stream: true
    }))
    .pipe(gzip())
    .pipe(gulp.dest('./build'));
});
