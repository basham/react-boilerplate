var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var gzip = require('gulp-gzip');

gulp.task('vendor', function() {
  return gulp.src([
      './bower_components/react/react-with-addons.min.js',
      './bower_components/react-router/build/global/ReactRouter.min.js',
      './bower_components/reflux/dist/reflux.min.js',
      './bower_components/superagent/superagent.js',
      './bower_components/fastclick/lib/fastclick.js'
    ])
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('./build'))
    //.pipe(uglify())
    .pipe(gzip())
    .pipe(gulp.dest('./build'));
});
