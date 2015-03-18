var gulp = require('gulp');
var svg = require('gulp-svg-symbols');
var rename = require('gulp-rename');

function task() {
  return gulp.src('./src/assets/**/*.svg')
    .pipe(svg({
      id: 'qn-Icon--%f',
      templates: ['default-svg']
    }))
    .pipe(rename('icons.svg'))
    .pipe(gulp.dest('./build'));
}

gulp.task('icons', task);

module.exports = task;
